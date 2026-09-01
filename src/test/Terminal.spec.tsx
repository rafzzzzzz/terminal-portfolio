import { describe, it, expect, vi } from "vitest";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { render, screen, userEvent } from "../utils/test-utils";
import Terminal, { commands } from "../components/Terminal";

// setup function
function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const allCmds = commands.map(cmdObj => cmdObj.cmd);

describe("Terminal Component", () => {
  let terminalInput: HTMLInputElement;
  let user: UserEvent;
  let unmount: () => void;

  beforeEach(() => {
    window.localStorage.clear();
    window.open = vi.fn();
    const termSetup = setup(<Terminal />);
    user = termSetup.user;
    unmount = termSetup.unmount;
    terminalInput = screen.getByTitle("Terminal command input");
  });

  describe("Input Features & Initial State", () => {
    it("should display welcome cmd by default", () => {
      expect(screen.getByTestId("input-command").textContent).toBe("welcome");
    });

    it("should change input value", async () => {
      await user.type(terminalInput, "demo");
      expect(terminalInput.value).toBe("demo");
    });

    it("should clear input value when click enter", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Input Commands", () => {
    it("should return 'command not found' when input value is invalid", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(screen.getByTestId("not-found-0").innerHTML).toBe(
        "command not found: demo"
      );
    });

    it("should return 'visitor' when user type 'whoami' cmd", async () => {
      await user.type(terminalInput, "whoami{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "visitor"
      );
    });

    it("should return '/home/rafael' when user type 'pwd' cmd", async () => {
      await user.type(terminalInput, "pwd{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "/home/rafael"
      );
    });

    it("should display cmd history when user type 'history' cmd", async () => {
      await user.type(terminalInput, "whoami{enter}");
      await user.type(terminalInput, "history{enter}");

      const commands =
        screen.getByTestId("latest-output").firstChild?.childNodes;

      expect(commands?.length).toBe(3);

      const typedCommands: string[] = [];
      commands?.forEach(cmd => {
        typedCommands.push(cmd.textContent || "");
      });

      expect(typedCommands).toEqual(["welcome", "whoami", "history"]);
    });

    it("should clear everything when user type 'clear' cmd", async () => {
      await user.type(terminalInput, "clear{enter}");
      expect(screen.queryAllByTestId("input-command")).toHaveLength(0);
    });

    it("should return `hello world` when user type `echo hello world` cmd", async () => {
      await user.type(terminalInput, "echo hello world{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );
    });

    it("should return `hello world` without quotes when user type `echo 'hello world'` cmd", async () => {
      // omit single quotes
      await user.type(terminalInput, "echo 'hello world'{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );

      // omit double quotes
      await user.type(terminalInput, 'echo "hello world"{enter}');
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );

      // omit backtick
      await user.type(terminalInput, "echo `hello world`{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );
    });

    it("should render Welcome component when user type 'welcome' cmd", async () => {
      await user.type(terminalInput, "clear{enter}");
      await user.type(terminalInput, "welcome{enter}");
      expect(screen.getByTestId("welcome")).toBeInTheDocument();
    });

    const otherCmds = [
      "about",
      "education",
      "experience",
      "contact",
      "github",
      "help",
      "history",
      "homelab",
      "projects",
      "publication",
      "skills",
      "themes",
    ];
    otherCmds.forEach(cmd => {
      it(`should render ${cmd} component when user type '${cmd}' cmd`, async () => {
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(screen.getByTestId(`${cmd}`)).toBeInTheDocument();
      });
    });

    it("should list the Catppuccin theme", async () => {
      await user.type(terminalInput, "themes{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "catppuccin"
      );
    });
  });

  describe("Links and redirect commands", () => {
    it("should show a clickable email address without opening it", async () => {
      await user.type(terminalInput, "email{enter}");
      expect(window.open).not.toHaveBeenCalled();
      expect(
        screen.getByRole("link", { name: "rafael@marques.com" })
      ).toHaveAttribute("href", "mailto:rafael@marques.com");
    });

    it("should open AirSense when user types 'projects go 1'", async () => {
      await user.type(terminalInput, "projects go 1{enter}");
      expect(window.open).toHaveBeenCalledWith(
        "https://github.com/rafzzzzzz/AirSense",
        "_blank"
      );
    });

    it("should show the GitHub profile link without opening it", async () => {
      await user.type(terminalInput, "github{enter}");
      expect(window.open).not.toHaveBeenCalled();
      expect(
        screen.getByRole("link", {
          name: "https://github.com/rafzzzzzz",
        })
      ).toHaveAttribute("href", "https://github.com/rafzzzzzz");
    });
  });

  describe("Invalid Arguments", () => {
    const specialUsageCmds = ["themes", "projects"];
    const usageCmds = allCmds.filter(
      cmd => !["echo", ...specialUsageCmds].includes(cmd)
    );

    usageCmds.forEach(cmd => {
      it(`should return usage component for ${cmd} cmd with invalid arg`, async () => {
        await user.type(terminalInput, `${cmd} sth{enter}`);
        expect(screen.getByTestId("usage-output").innerHTML).toBe(
          `Usage: ${cmd}`
        );
      });
    });

    specialUsageCmds.forEach(cmd => {
      it(`should return usage component for '${cmd}' cmd with invalid arg`, async () => {
        await user.type(terminalInput, `${cmd} sth{enter}`);
        expect(screen.getByTestId(`${cmd}-invalid-arg`)).toBeInTheDocument();
      });

      it(`should return usage component for '${cmd}' cmd with extra args`, async () => {
        const arg = cmd === "themes" ? "set light" : "go 1";
        await user.type(terminalInput, `${cmd} ${arg} extra-arg{enter}`);
        expect(screen.getByTestId(`${cmd}-invalid-arg`)).toBeInTheDocument();
      });

      it(`should return usage component for '${cmd}' cmd with incorrect option`, async () => {
        const arg = cmd === "themes" ? "go light" : "set 4";
        window.open = vi.fn();

        // firstly run commands correct options
        await user.type(terminalInput, `projects go 1{enter}`);
        await user.type(terminalInput, `themes set catppuccin{enter}`);

        // then run cmd with incorrect options
        await user.type(terminalInput, `${cmd} ${arg}{enter}`);
        expect(window.open).toBeCalledTimes(1);

        // TODO: Test theme change
      });
    });
  });

  describe("Keyboard shortcuts", () => {
    allCmds.forEach(cmd => {
      it(`should autocomplete '${cmd}' when 'Tab' is pressed`, async () => {
        await user.type(terminalInput, cmd.slice(0, 2));
        await user.tab();
        expect(terminalInput.value).toBe(cmd);
      });
    });

    allCmds.forEach(cmd => {
      it(`should autocomplete '${cmd}' when 'Ctrl + I' is pressed`, async () => {
        await user.type(terminalInput, cmd.slice(0, 2));
        await user.keyboard("{Control>}i{/Control}");
        expect(terminalInput.value).toBe(cmd);
      });
    });

    it("should clear when 'Ctrl + L' is pressed", async () => {
      await user.type(terminalInput, "history{enter}");
      await user.keyboard("{Control>}l{/Control}");
      expect(screen.queryAllByTestId("input-command")).toHaveLength(0);
    });

    it("should go to previous back and forth when 'Up & Down Arrow' is pressed", async () => {
      await user.type(terminalInput, "about{enter}");
      await user.type(terminalInput, "whoami{enter}");
      await user.type(terminalInput, "pwd{enter}");
      await user.keyboard("{arrowup>3}");
      expect(terminalInput.value).toBe("about");
      await user.keyboard("{arrowup>2}");
      expect(terminalInput.value).toBe("welcome");
      await user.keyboard("{arrowdown>2}");
      expect(terminalInput.value).toBe("whoami");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("pwd");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Portfolio content and language", () => {
    it("shows the core positioning before a visitor enters a command", () => {
      const welcome = screen.getByTestId("welcome");

      expect(welcome).toHaveTextContent("Rafael Marques");
      expect(welcome).not.toHaveTextContent(
        "IT Teacher Transitioning into Systems Administration"
      );
      expect(welcome).toHaveTextContent(
        "Linux | Networking | Docker | Self-hosting"
      );
      expect(welcome).toHaveTextContent("Trancoso, Guarda, Portugal");
    });

    it("switches all portfolio guidance to European Portuguese", async () => {
      await user.click(screen.getByRole("button", { name: "PT" }));

      expect(screen.getByTestId("welcome")).toHaveTextContent(
        "Linux | Redes | Docker | Self-hosting"
      );
      expect(screen.getByTitle("Introdução de comandos no terminal")).toBe(
        terminalInput
      );

      await user.type(terminalInput, "help{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "ver a minha experiência de ensino"
      );
    });

    it("persists the selected language", async () => {
      await user.click(screen.getByRole("button", { name: "PT" }));
      expect(window.localStorage.getItem("portfolio-language")).toBe("pt");

      unmount();
      setup(<Terminal />);

      expect(screen.getByRole("button", { name: "PT" })).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      expect(screen.getByTestId("welcome")).toHaveTextContent(
        "Escolhe um comando"
      );
    });

    it("executes a clickable suggestion and adds it to history", async () => {
      await user.click(screen.getByRole("button", { name: "about" }));

      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Rafael Marques"
      );
      expect(screen.getAllByTestId("input-command")[0]).toHaveTextContent(
        "about"
      );

      await user.type(terminalInput, "history{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent("about");
    });

    it("shows honest home lab and contact details", async () => {
      await user.type(terminalInput, "homelab{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "not production infrastructure"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Docker service management"
      );

      await user.type(terminalInput, "contact{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "rafael@marques.com"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Escola Profissional de Trancoso"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Current workplace"
      );
    });

    it("shows revised about, skills, and experience content", async () => {
      await user.type(terminalInput, "about{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Computer Engineering graduate and IT teacher"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "looking for opportunities"
      );

      await user.type(terminalInput, "skills{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "AI-assisted workflows"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "agent harnesses"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Linux, Windows, and macOS"
      );
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "Programming and automation"
      );
      expect(screen.getByTestId("latest-output")).not.toHaveTextContent(
        "taught in class"
      );

      await user.type(terminalInput, "experience{enter}");
      expect(screen.getByTestId("latest-output")).toHaveTextContent(
        "maintain lab PCs"
      );
      expect(screen.getByTestId("latest-output")).not.toHaveTextContent(
        "Practical classroom work"
      );
    });

    it("does not expose the removed socials command", async () => {
      expect(allCmds).not.toContain("socials");

      await user.type(terminalInput, "socials{enter}");
      expect(screen.getByTestId("not-found-0")).toHaveTextContent(
        "command not found: socials"
      );
    });

    it("lists only AirSense and the personal Unraid home lab as projects", async () => {
      await user.type(terminalInput, "projects{enter}");
      const output = screen.getByTestId("latest-output");

      expect(output).toHaveTextContent("AirSense");
      expect(output).toHaveTextContent("Personal Unraid home lab");
      expect(output).not.toHaveTextContent("My primary project");
      expect(output).not.toHaveTextContent("Omareddit");
      expect(output).not.toHaveTextContent("Unraid Theme Studio");
      expect(output).not.toHaveTextContent("Network Cable Leaderboard");
    });
  });
});
