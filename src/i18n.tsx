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
      headline: "IT Teacher Transitioning into Systems Administration",
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
      email: "send me an email",
      experience: "view my teaching experience",
      github: "open my GitHub profile",
      help: "list available commands",
      history: "view command history",
      homelab: "view my personal home lab",
      projects: "view my projects",
      publication: "view my scientific publication",
      pwd: "print the current working directory",
      skills: "view my technical skills",
      socials: "view my social links",
      themes: "list available themes",
      welcome: "display the welcome section",
      whoami: "display the current user",
    },
    about: [
      "Hi, my name is Rafael Marques.",
      "I am an IT teacher and computer engineering graduate based in Trancoso, Guarda, Portugal.",
      "I am moving towards systems administration through practical work with Linux, networking, Docker, self-hosting, and computer hardware.",
    ],
    skills: {
      intro: "Skills grounded in teaching, education, and personal projects",
      items: [
        [
          "Systems",
          "Linux and Windows subjects taught; Unraid used in my personal home lab",
        ],
        [
          "Networking",
          "TCP/IP, DHCP, DNS, switches, routers, cabling, and troubleshooting taught in class",
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
          "ESP32 and Arduino used in education and projects",
        ],
        [
          "Programming and web",
          "C++, Java, HTML, and CSS used in education and projects",
        ],
      ],
    },
    experience: {
      intro: "Teaching experience",
      role: "IT Teacher",
      employer: "Escola Profissional de Trancoso | 2024 - present",
      teachingTitle: "Classroom teaching",
      teaching:
        "I teach computer networks, operating systems, computer architecture, digital systems, data communications, devices and peripherals, network protocols, transmission media, and microprocessor programming.",
      practicalTitle: "Practical classroom work",
      practical:
        "I maintain lab PCs, install operating systems, configure switches and routers, troubleshoot classroom equipment, and prepare virtual machines for lessons.",
      boundary:
        "This is teaching and classroom lab work. I am transitioning into systems administration and do not claim production systems administration experience.",
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
        "My primary project. A low-cost ESP32 indoor air quality monitor with environmental sensors, a custom PCB, a 3D-printed enclosure, InfluxDB, and Grafana.",
      homelab:
        "My personal Unraid self-hosting environment on standard desktop hardware. Type homelab for the setup and routine work.",
    },
    contact: {
      intro: "Contact details",
      location: "Location",
      workplace: "Workplace",
    },
    socialIntro: "Social links",
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
      headline:
        "Professor de Informática em transição para Administração de Sistemas",
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
      email: "enviar-me uma mensagem de correio eletrónico",
      experience: "ver a minha experiência de ensino",
      github: "abrir o meu perfil no GitHub",
      help: "listar os comandos disponíveis",
      history: "ver o histórico de comandos",
      homelab: "ver o meu laboratório doméstico",
      projects: "ver os meus projetos",
      publication: "ver a minha publicação científica",
      pwd: "mostrar a diretoria de trabalho atual",
      skills: "ver as minhas competências técnicas",
      socials: "ver as minhas ligações sociais",
      themes: "listar os temas disponíveis",
      welcome: "mostrar a apresentação inicial",
      whoami: "mostrar o utilizador atual",
    },
    about: [
      "Olá, chamo-me Rafael Marques.",
      "Sou professor de Informática e licenciado em Engenharia Informática. Vivo em Trancoso, no distrito da Guarda.",
      "Estou a orientar o meu percurso para a administração de sistemas através de trabalho prático com Linux, redes, Docker, self-hosting e hardware informático.",
    ],
    skills: {
      intro:
        "Competências adquiridas no ensino, na formação e em projetos pessoais",
      items: [
        [
          "Sistemas",
          "Disciplinas de Linux e Windows lecionadas; Unraid utilizado no meu laboratório doméstico",
        ],
        [
          "Redes",
          "TCP/IP, DHCP, DNS, switches, routers, cablagem e diagnóstico de avarias lecionados em aula",
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
          "ESP32 e Arduino utilizados na formação e em projetos",
        ],
        [
          "Programação e web",
          "C++, Java, HTML e CSS utilizados na formação e em projetos",
        ],
      ],
    },
    experience: {
      intro: "Experiência de ensino",
      role: "Professor de Informática",
      employer: "Escola Profissional de Trancoso | 2024 - presente",
      teachingTitle: "Ensino em sala de aula",
      teaching:
        "Leciono redes de computadores, sistemas operativos, arquitetura de computadores, sistemas digitais, comunicação de dados, dispositivos e periféricos, protocolos de rede, meios de transmissão e programação de microprocessadores.",
      practicalTitle: "Trabalho prático em sala de aula",
      practical:
        "Faço a manutenção dos computadores do laboratório, instalo sistemas operativos, configuro switches e routers, resolvo avarias em equipamentos utilizados nas aulas e preparo máquinas virtuais para as disciplinas.",
      boundary:
        "Esta experiência pertence ao ensino e ao trabalho no laboratório escolar. Estou em transição para a administração de sistemas e não afirmo ter experiência em administração de sistemas de produção.",
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
        "O meu projeto principal. Um sistema económico de monitorização da qualidade do ar interior, baseado num ESP32, com sensores ambientais, placa de circuito impresso própria, caixa impressa em 3D, InfluxDB e Grafana.",
      homelab:
        "O meu ambiente pessoal de self-hosting com Unraid em hardware comum de computador. Escreva homelab para ver a configuração e o trabalho habitual.",
    },
    contact: {
      intro: "Contactos",
      location: "Localização",
      workplace: "Local de trabalho",
    },
    socialIntro: "Ligações sociais",
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
