import { createContext, useContext } from "react";

export type Language = "en" | "pt";

export const translations = {
  en: {
    inputTitle: "Terminal command input",
    commandNotFound: "command not found",
    usage: "Usage",
    example: "Example",
    set: "set",
    go: "go",
    welcome: {
      focus: "Linux | Networking | Docker | Self-hosting",
      location: "Trancoso, Guarda, Portugal",
      intro: "Choose a command below or type help to see every command.",
      suggestions: "Start here",
    },
    commandDescriptions: {
      about: "learn about Rafael Marques",
      clear: "clear the terminal",
      contact: "view contact details",
      echo: "print text to the terminal",
      education: "view my education",
      email: "show my email address",
      experience: "view my teaching experience",
      github: "show my GitHub profile link",
      help: "list available commands",
      history: "view command history",
      homelab: "view my personal home lab",
      projects: "view my projects",
      publication: "view my scientific publication",
      pwd: "print the current working directory",
      skills: "view my technical skills",
      themes: "list available themes",
      welcome: "display the welcome section",
      whoami: "display the current user",
    },
    about: [
      "Hi, my name is Rafael Marques.",
      "I am a Computer Engineering graduate and IT teacher based in Trancoso, Guarda, Portugal.",
      "I am interested in systems administration and looking for opportunities where I can apply and expand my experience with Linux, networking, Docker, self-hosting, and computer hardware.",
    ],
    skills: {
      intro:
        "Technical skills developed through education, work, and personal projects",
      items: [
        [
          "Systems",
          "Experience with Linux, Windows, and macOS operating systems; Unraid used in my personal home lab",
        ],
        [
          "AI-assisted workflows",
          "Practical use of agent harnesses, reusable skills, context management, prompt iteration, code review, and test-driven verification",
        ],
        [
          "Networking",
          "TCP/IP, DHCP, DNS, switches, routers, structured cabling, and network troubleshooting",
        ],
        [
          "Containers and storage",
          "Docker service management, network shares, storage, and backups in my home lab",
        ],
        [
          "Hardware",
          "PC assembly, maintenance, diagnostics, and equipment troubleshooting",
        ],
        [
          "Embedded systems",
          "ESP32 and Arduino development through hardware projects",
        ],
        [
          "Programming and automation",
          "C++, Java, PowerShell, and shell scripting used in coursework and personal projects",
        ],
      ],
    },
    experience: {
      intro: "Teaching experience",
      role: "IT Teacher",
      employer: "Escola Profissional de Trancoso | 2024 - present",
      teachingTitle: "Classroom teaching",
      teaching:
        "I teach computer networks, operating systems, computer architecture, digital systems, data communications, devices and peripherals, network protocols, transmission media, and microprocessor programming. I also maintain lab PCs, install operating systems, configure switches and routers, troubleshoot equipment, and prepare virtual machines.",
      boundary:
        "This is teaching and school lab experience, not production systems administration.",
    },
    homelab: {
      intro: "Personal Unraid home lab",
      summary:
        "A personal self-hosting environment running on Unraid and standard desktop hardware. It is a home lab, not production infrastructure.",
      workTitle: "Routine work",
      work: "Docker service management, storage, network shares, backups, updates, troubleshooting, and routine maintenance.",
      servicesTitle: "Service groups",
      services:
        "Media management, downloads, administration, and storage and backup services.",
    },
    projects: {
      intro: "Two projects that reflect my systems and hardware interests.",
      airsense:
        "A low-cost ESP32 indoor air quality monitor with environmental sensors, a custom PCB, a 3D-printed enclosure, InfluxDB, and Grafana.",
      homelab:
        "My personal Unraid self-hosting environment on standard desktop hardware. Type homelab for the setup and routine work.",
    },
    contact: {
      intro: "Contact details",
      location: "Location",
      workplace: "Current workplace",
    },
    githubPrompt: "Click the link below to view my GitHub profile.",
    emailPrompt: "Click the email address below to send me an email.",
    education: {
      intro: "Education",
      degree: "BSc in Computer Engineering",
      degreeSchool: "Polytechnic Institute of Guarda | 2023",
      course: "CET in Multimedia Product Development",
      courseSchool: "Polytechnic Institute of Guarda | 2014",
    },
    publication: {
      intro: "Scientific publication",
      description:
        "Published by Springer in New Trends in Disruptive Technologies, Tech Ethics, and Artificial Intelligence, DiTTEt 2024. The ESP32-based system measures indoor air quality and stores readings in InfluxDB for display in Grafana.",
    },
    shortcuts: {
      autocomplete: "autocomplete the command",
      previous: "recall the previous command",
      clear: "clear the terminal",
    },
    languageLabel: "Language",
  },
  pt: {
    inputTitle: "Introdução de comandos no terminal",
    commandNotFound: "comando não encontrado",
    usage: "Utilização",
    example: "Exemplo",
    set: "definir",
    go: "abrir",
    welcome: {
      focus: "Linux | Redes | Docker | Self-hosting",
      location: "Trancoso, Guarda, Portugal",
      intro:
        "Escolha um comando abaixo ou escreva help para ver todos os comandos.",
      suggestions: "Começar por aqui",
    },
    commandDescriptions: {
      about: "conhecer Rafael Marques",
      clear: "limpar o terminal",
      contact: "ver os contactos",
      echo: "mostrar texto no terminal",
      education: "ver a minha formação",
      email: "mostrar o meu endereço de correio eletrónico",
      experience: "ver a minha experiência de ensino",
      github: "mostrar a ligação para o meu perfil no GitHub",
      help: "listar os comandos disponíveis",
      history: "ver o histórico de comandos",
      homelab: "ver o meu laboratório doméstico",
      projects: "ver os meus projetos",
      publication: "ver a minha publicação científica",
      pwd: "mostrar a diretoria de trabalho atual",
      skills: "ver as minhas competências técnicas",
      themes: "listar os temas disponíveis",
      welcome: "mostrar a apresentação inicial",
      whoami: "mostrar o utilizador atual",
    },
    about: [
      "Olá, chamo-me Rafael Marques.",
      "Sou licenciado em Engenharia Informática e professor de Informática. Vivo em Trancoso, no distrito da Guarda.",
      "Interesso-me pela administração de sistemas e procuro oportunidades onde possa aplicar e desenvolver a minha experiência com Linux, redes, Docker, self-hosting e hardware informático.",
    ],
    skills: {
      intro:
        "Competências técnicas desenvolvidas na formação, no trabalho e em projetos pessoais",
      items: [
        [
          "Sistemas",
          "Experiência com sistemas operativos Linux, Windows e macOS; Unraid utilizado no meu laboratório doméstico",
        ],
        [
          "Fluxos de trabalho assistidos por IA",
          "Utilização prática de agent harnesses, skills reutilizáveis, gestão de contexto, iteração de prompts, revisão de código e validação através de testes",
        ],
        [
          "Redes",
          "TCP/IP, DHCP, DNS, switches, routers, cablagem estruturada e diagnóstico de problemas de rede",
        ],
        [
          "Contentores e armazenamento",
          "Gestão de serviços Docker, partilhas de rede, armazenamento e cópias de segurança no meu laboratório doméstico",
        ],
        [
          "Hardware",
          "Montagem, manutenção e diagnóstico de computadores e resolução de avarias em equipamentos",
        ],
        [
          "Sistemas embebidos",
          "Desenvolvimento com ESP32 e Arduino em projetos de hardware",
        ],
        [
          "Programação e automação",
          "C++, Java, PowerShell e shell scripting utilizados na formação e em projetos pessoais",
        ],
      ],
    },
    experience: {
      intro: "Experiência de ensino",
      role: "Professor de Informática",
      employer: "Escola Profissional de Trancoso | 2024 - presente",
      teachingTitle: "Ensino em sala de aula",
      teaching:
        "Leciono redes de computadores, sistemas operativos, arquitetura de computadores, sistemas digitais, comunicação de dados, dispositivos e periféricos, protocolos de rede, meios de transmissão e programação de microprocessadores. Também faço a manutenção dos computadores do laboratório, instalo sistemas operativos, configuro switches e routers, resolvo problemas em equipamentos e preparo máquinas virtuais.",
      boundary:
        "Esta é experiência de ensino e de laboratório escolar, não de administração de sistemas de produção.",
    },
    homelab: {
      intro: "Laboratório doméstico pessoal com Unraid",
      summary:
        "Um ambiente pessoal de self-hosting com Unraid, instalado em hardware comum de computador. É um laboratório doméstico, não uma infraestrutura de produção.",
      workTitle: "Trabalho habitual",
      work: "Gestão de serviços Docker, armazenamento, partilhas de rede, cópias de segurança, atualizações, resolução de problemas e manutenção regular.",
      servicesTitle: "Grupos de serviços",
      services:
        "Gestão de conteúdos multimédia, transferências, administração e serviços de armazenamento e cópias de segurança.",
    },
    projects: {
      intro:
        "Dois projetos ligados aos meus interesses em sistemas e hardware.",
      airsense:
        "Um sistema económico de monitorização da qualidade do ar interior, baseado num ESP32, com sensores ambientais, placa de circuito impresso própria, caixa impressa em 3D, InfluxDB e Grafana.",
      homelab:
        "O meu ambiente pessoal de self-hosting com Unraid em hardware comum de computador. Escreva homelab para ver a configuração e o trabalho habitual.",
    },
    contact: {
      intro: "Contactos",
      location: "Localização",
      workplace: "Local de trabalho atual",
    },
    githubPrompt: "Clique na ligação abaixo para ver o meu perfil no GitHub.",
    emailPrompt:
      "Clique no endereço abaixo para me enviar uma mensagem de correio eletrónico.",
    education: {
      intro: "Formação",
      degree: "Licenciatura em Engenharia Informática",
      degreeSchool: "Instituto Politécnico da Guarda | 2023",
      course: "CET em Desenvolvimento de Produtos Multimédia",
      courseSchool: "Instituto Politécnico da Guarda | 2014",
    },
    publication: {
      intro: "Publicação científica",
      description:
        "Publicada pela Springer em New Trends in Disruptive Technologies, Tech Ethics, and Artificial Intelligence, DiTTEt 2024. O sistema baseado num ESP32 mede a qualidade do ar interior e guarda os dados no InfluxDB para apresentação no Grafana.",
    },
    shortcuts: {
      autocomplete: "completar o comando",
      previous: "recuperar o comando anterior",
      clear: "limpar o terminal",
    },
    languageLabel: "Idioma",
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

export const languageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => undefined,
  t: translations.en,
});

export const useLanguage = () => useContext(languageContext);
