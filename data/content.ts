export const currentSkills = [
  ["React / Next.js", "Personal products, portfolio experiences, and production web application interfaces."],
  ["Python", "Machine learning experiments, automation, desktop utilities, and game development."],
  ["C++", "Simulation software, WebAssembly modules, native tools, and interactive games."],
  ["TypeScript", "Flight display logic, component libraries, tests, and modern full-stack applications."],
  ["Testing", "Jest, Catch2, JUnit, integration testing, and test-driven development."]
] as const;

export const work = [
  {
    company: "Boeing",
    role: "Senior Programmer",
    date: "June 2019 - Present",
    bullets: [
      "Develops C++ and WebAssembly simulation packages that integrate with internal flight APIs.",
      "Designed display and flight-management logic with TypeScript, HTML, and CSS.",
      "Built CI/CD pipelines with automated testing, Coverity, SonarQube, Azure DevOps, and GitLab.",
      "Created more than 4,000 Jest unit tests for supplier-provided code.",
      "Leads code review, integration testing, onboarding, documentation, and production issue analysis."
    ]
  },
  {
    company: "Boeing",
    role: "System and Data Analyst",
    date: "July 2015 - June 2019",
    bullets: [
      "Served as scrum master and production focal across multiple application teams.",
      "Created dashboards, audit documentation, development schedules, and application retirement plans.",
      "Transitioned into development through an interactive desktop integrating several internal apps."
    ]
  },
  {
    company: "Accenture Federal Services",
    role: "Senior Systems Specialist",
    date: "June 2013 - July 2015",
    bullets: [
      "Acted as proxy product owner for a multimillion-dollar USPS billing application.",
      "Refined requirements, coordinated testing, and managed defects in Agile and Waterfall delivery.",
      "Worked with SQL, PL/SQL, XML, ALM, and VersionOne."
    ]
  },
  {
    company: "Phillips 66",
    role: "Production Associate",
    date: "August 2008 - June 2013",
    bullets: [
      "Operated production systems and coordinated inbound and outbound freight through SAP.",
      "Led safety audits, initiatives, training, and plant-wide presentations."
    ]
  }
];

export const education = [
  ["M.S. Computer Engineering", "Washington University in St. Louis"],
  ["M.B.A. Management Information Systems", "Southern Illinois University Edwardsville"],
  ["B.L.S. with an Emphasis in Art", "Southern Illinois University Edwardsville"]
] as const;

export const extendedSkills = [
  "Codex", "Kiro", "Visual Studio", "Test-Driven Development", "SimConnect",
  "HTML / CSS", "JavaScript", "Spring Boot", "Azure DevOps", "GitLab",
  "Raylib", "Pygame", "SQL", "Agile delivery", "Technical leadership"
];

export const art = [
  ["brittany_daniels.JPG", "Brittany Daniels", "Portrait"],
  ["big_twiggy.JPG", "Big Twiggy", "Portrait"],
  ["gaga_one.jpg", "Gaga One", "Portrait"],
  ["audrey.JPG", "Audrey", "Portrait"],
  ["crawford.jpg", "Crawford", "Portrait"],
  ["king_of_new_york.jpg", "King of New York", "Portrait"],
  ["highland_trucks.JPG", "Highland Trucks", "Landscape"],
  ["liquor_bottles.jpg", "Liquor Bottles and Flowers", "Still life"],
  ["stephs_tree.JPG", "Steph's Tree", "Abstract"],
  ["iris.jpg", "Iris", "Abstract"],
  ["clown_contractors.jpg", "Clown Contractors", "Abstract"],
  ["bolero.jpg", "Bolero", "Abstract"]
] as const;
