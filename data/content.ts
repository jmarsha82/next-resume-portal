export const contact = {
  role: "Current Role : Programmer at Boeing",
  phone: "(618)-978-1469",
  email: "jmarsha82@yahoo.com",
  lastUpdated: "2025-09-19T16:09:38.349+00:00"
};

export const currentSkills = [
  {
    name: "ReactJS",
    href: "https://github.com/jmarsha82/jm-mern-resume-portal",
    status: "Used Daily",
    description: "Assorted personal projects including uses in website and implementation using java Spring Framework"
  },
  {
    name: "Python",
    href: "https://github.com/jmarsha82/cse-511a-pacman-ai",
    status: "Used Daily",
    description: "Machine learning projects and neural network research"
  },
  {
    name: "C++",
    href: "https://github.com/jmarsha82/jm-gui-cplusplus",
    status: "Used Daily",
    description: "Executable and Webassembly projects using a SimConnect API and Flight Simulation Software"
  },
  {
    name: "Jest",
    href: "https://github.com/jmarsha82/jm-mern-resume-portal/tree/master/frontend/src/test",
    status: "Used Daily",
    description: "Used to test javascript code in both work and personal projects"
  },
  {
    name: "Codex",
    href: "https://openai.com/codex/",
    status: "Used Daily",
    description: "Go to CLI for coding assitance for both work and personal projects. Use of hooks and skills daily"
  }
];

export const extendedSkills = [
  ["Kiro", "https://kiro.dev/", "Used Daily", "Use IDE and built in features for work projects"],
  ["Visual Studio", "https://visualstudio.microsoft.com/", "Used Daily", "Using VSCode for Python and React Projects and Visual Studio Professional for C++, C# and some Xamarin"],
  ["Test-Driven Development", "https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/", "Used Daily", "Incorporated into all work related development and most hobby codding. It is a standard"],
  ["SimConnect", "https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/SimConnect_SDK.htm", "Used Daily", "An flight simulator api used to talk to Microsoft Flight Simulator in C++ .exe and webassembly"],
  ["HTML, CSS, Typescript, Javascript", "https://www.w3schools.com/", "Used Daily", "Used in all web apps and sites as part of my job"],
  ["Azure Dev Ops", "https://azure.microsoft.com/en-us/products/devops/", "Used Daily", "Used for Source Control, Work Tracking, Testing, Ci/CD setup and monitoring, VM creation, etc."],
  ["SQL", "https://www.sqltutorial.org/", "Used Frequently", "A coding and testing tool for implementing most backends of all web applications I have worked on"],
  ["Postman", "https://www.postman.com/", "Used Frequently", "Testing tool for new backend apis"],
  ["Virtual Box", "https://www.virtualbox.org/", "Used Ocassionally", "Set up several VM images and have used other OS for security testing and distributed application"],
  ["Spring Framework", "https://spring.io/guides", "Used Ocassionally", "Used on multiple projects in java and kotlin with Pivotal or Gitlab as the cloud plaform"],
  ["JUnit", "https://junit.org/", "Used Ocassionally", "Used for testing Java backends of applications"],
  ["Java", "https://github.com/jmarsha82/cse-530s-databases", "Used Occasionally", "Used on multiple applications and all throughout schooling. Like riding a bike"],
  ["AWS", "https://aws.amazon.com/", "Used Occasionally", "Set up EC2 for machine learning IoT communication in python with custom made smart devices"],
  ["IntelliJ", "https://www.jetbrains.com/idea/", "Used Occasionally", "Preferred IDE when working in Java if I have the license for Enterprise"],
  ["Thymeleaf", "https://www.thymeleaf.org/", "Used Rarely", "Use with Javascript and a java Spring Framework"],
  ["Swift", "https://github.com/jmarsha82/smart-shopper-mobile-app", "Used Rarely", "Used on mulitple mobile apps for the iPhone"],
  ["Oracle SQL Developer", "https://www.oracle.com/database/sqldeveloper/", "Used Rarely", "Backend testing tool"],
  ["Linux", "https://www.linux.org/pages/download/", "Used Rarely", "Worked in a linux system with file management and scripting in both Ubuntu and Kali"],
  ["Kotlin", "https://kotlinlang.org/", "Used Rarely", "Very similiar to Java. Used with Spring Framework and ReactJS frontend"]
] as const;

export const work = [
  {
    company: "Boeing",
    role: "Senior Programmer",
    date: "June 2019 - Present",
    location: "St. Louis MO",
    bullets: [
      "Developed several mod packages using C++ web assembly capable of accessing internal APIs and allowing for interaction.",
      "Developed flight component logic using C++ for virtual versions of the 737Max8 737Max9 and 737NG planes.",
      "Implemented a CI/CD pipeline yaml in Azure DevOps and Gitlab which integrated automated unit tests, code scanning using Coverity and SonarQube and move code between environments.",
      "Designed and implemented logic for the Primary Flight Display, Multifunction Flight Display and Flight Management Computer using Typescript, HTML, and CSS.",
      "Developed over 4000 unit test cases using Jest for supplier provided code in the span of 5 months",
      "Designed and implemented a integration test application used Catch2 in C++ to test flight lessons",
      "Act as a Dev Lead for the 737Max8 MOD team where I am responsible for reviewing and testing all code before it is migrated to production.",
      "Developed custom components with Boeings Common Simulation Framework and integrated Boeings SimBinary packages with the corresponding planes in ESP, Microsoft Flight Simulator X, and Microsoft Flight Simulator 2020.",
      "Implemented a Simulation State Control Service that uses SimConnect to interact with Microsoft Flight Simulator 2020 using C++.",
      "Work with Third Party Simulation Code and gain experience in Game development and integration.",
      "Assisted in Onboarding multiple resources by resolving any issues with software installation, plugin setup, plugin execution and a general explanation of the application architecture.",
      "Developed a large-scale request and workflow tracking system for the treasury organization at Boeing using ReactJS and Kotlin.",
      "Implemented a CI/CD pipeline in Gitlab",
      "Practiced Test Driven development on a Treasury application using Jest and JUnit.",
      "Developed an interactive dashboard that allowed all Boeing employees to have a better user experience on the internal Boeing Homepage using Javascript, Thymeleaf and Java.",
      "Used Spring Boot Framework and pushed application into Cloud based storage.",
      "Worked in a single and paired programming environment and used Agile development standards."
    ]
  },
  {
    company: "Boeing",
    role: "System and Data Analyst",
    date: "July 2015 - June 2019",
    location: "St. Louis MO",
    bullets: [
      "Worked as scrum master for multiple product teams on multiple applications.",
      "Became a specialist at using Team Foundation Server and coached other teams to use agile methodologies through the work tracking application.",
      "Acted as production focal and worked with customers and developers to fix any issues that occurred with the application in a timely manner.",
      "Interacted with testing and work item tracking with Gitlab.",
      "Assisted in the development of low level web pages and web applilcations.",
      "Created dynamic interactive dashboards using Team Foundation Server displaying code coverage and work item statuses for leadership.",
      "Prepared requirements and documentation for multiple security and quality audits.",
      "Assisted in the retirement of numerous applications as part of a department tech debt reduction.",
      "Prepared development schedules and program milestones for multiple projects.",
      "Transitioned from an analyst to developer role in the creation of an application which interfaces with several other apps and improves user experience using an interactive desktop."
    ]
  },
  {
    company: "Accenture",
    role: "Senior Systems Specialist",
    date: "June 2013 - July 2015",
    location: "St. Louis MO",
    bullets: [
      "Acted as Proxy Product Owner on Scrum Team working on a multimillion-dollar billing application.",
      "Used a variety of development software for SQL/PLSQL and XML.",
      "Managed changes to VersionOne to track Scrum team members progress and burn down.",
      "Updated requirements, defects, and test scripts in ALM.",
      "Clarified and refined requirements to assist in testing efforts of defects and application enhancements.",
      "Validated system functionality against specifications and managed testing effort.",
      "Challenged new members of the Scrum team with complex tasks and helped them work through issues.",
      "Assembled and gave several presentations on new functionality to members of the System Integration Testing team.",
      "Communicated issues and devoted time daily to the Client Application Test team and their efforts.",
      "Participated in several conference calls a day to discuss issues and timelines with other teams and business representatives.",
      "Maintained working relationship with developers and management.",
      "Played a key role in the Agile and Waterfall methods of the Software Development Lifecycle.",
      "Using the Agile Sprint method, all defects and application enhancements were completed at or under a two week timeframe.",
      "Created and maintained relationships with Product Owners and business representatives of the United States Postal Service in Washington D.C. to clarify issues with requirements."
    ]
  },
  {
    company: "Phillips 66",
    role: "Production Associate",
    date: "August 2008 - June 2013",
    location: "Hartford IL",
    bullets: [
      "Production Associate capable of running and maintaining several production systems.",
      "One of six Safety Core Team Leaders responsible for internal audits, safety initiatives, and plant wide presentations.",
      "Became fluent in SAP computer system while organizing inbound outbound freight.",
      "Accomplished annual Online Based Training concerning all aspects of safety protocol.",
      "Pulling and loading orders for outbound trucks.",
      "Co-managed the Behavior Based Safety Team which contributed to Hartford Lubes Recertification",
      "Created and gave several presentations on safety issues throughout the plant."
    ]
  }
];

export const education = [
  ["Masters in Computer Engineering", "Washington University of St. Louis", "St.Louis MO", "https://wustl.edu/"],
  ["Masters in Business Administration with a Specialization in Management Information Systems", "Southern Illinois University at Edwardsville", "Edwardsville IL", "https://www.siue.edu/"],
  ["Bachelor of Liberal Studies with an Emphasis in Art", "Southern Illinois University at Edwardsville", "Edwardsville IL", "https://www.siue.edu/"]
] as const;

export const devBooks = [
  ["deep_c_secrets.jpg", "Expert C Programming: Deep C Secrets", "Peter van der Linden", "1994", "Explains some of the hardest concepts of C programming.", "9780131774292"],
  ["growing_OO_tests.jpg", "Growing Object-Oriented Software, Guided by Tests.", "Steve Freeman, Nat Pryce", "2009", "Complete walkthrough of TDD.", "9780321503626"],
  ["computer_sec_hands_on.jpg", "Computer Security: A Hands-On Approach", "Wenliang Du", "2017", "Great walkthrough. Learn a lot of C in the process. Get the newest edition.", "9781548367947"],
  ["code_book.jpg", "Code: The Hidden Language of Computer Hardware and Software", "Charles Petzold", "2022", "Great explanation of how computers work at their most basic. Get the newest edition.", "9780735611313"],
  ["linux_prog.jpg", "The Linux Programming Interface: A Linux and UNIX System Programming Handbook", "Michael Kerrisk", "2010", "Complete guide to Linux OS with lots of C examples.", "9781593272203"],
  ["clean_architecture.jpg", "Clean Architecture: A Craftsman's Guide to Software Structure and Design", "Robert Martin", "2017", "Understanding of how applications should be designed.", "9780134494164"],
  ["extreme_program.jpg", "Extreme Programming Explained: Embrace Change", "Kent Beck, Cynthia Andres", "2004", "Overview of agile and how dev teams should interact.", "9780321278654"]
] as const;

export const devLinks = [
  ["codin_game.jpg", "CodinGame", "https://www.codingame.com/start", "Great way to build your skills and a lot of fun. Recommend creating a free account."],
  ["o_reilly.jpg", "O'Reilly", "https://learning.oreilly.com/home/", "Great resource for training if you have an account."],
  ["data_stuct_visual.jpg", "Data Structure Visualizations", "https://www.cs.usfca.edu/~galles/visualization/", "Helpful way to understand how certain algorithms work."],
  ["json_placeholder.jpg", "JSON Placeholder", "https://jsonplaceholder.typicode.com/", "Really good way to fake a backend for testing."],
  ["replit.jpg", "Replit", "https://replit.com/", "Online taylored IDEs with built in development tools."],
  ["w3_schools.jpg", "W3 Schools", "https://www.w3schools.com/default.asp", "All around good aid for simple web dev issues"],
  ["ninjamock.jpg", "NinjaMock", "https://ninjamock.com/", "Great tool if you find yourself as your own UX Designer"],
  ["trello.jpg", "Trello", "https://trello.com/en", "Free online WIP board for organizing projects"],
  ["hackerrank.jpg", "HackerRank", "https://www.hackerrank.com/dashboard", "Varitey of coding challenges for different languages"],
  ["spring.jpg", "Spring", "https://spring.io/guides", "Starting point for implementing Spring Framework"],
  ["react.jpg", "React", "https://react.dev/", "Starting point for implementing React Framework"],
  ["angular.jpg", "Angular", "https://angular.io/", "Starting point for implementing Angular Framework"],
  ["leetcode.jpg", "LeetCode", "https://leetcode.com/", "Great way to practice coding problems and interview questions"],
  ["claudeai.jpg", "Claude AI", "https://claude.ai/", "Great AI tool for answering coding questions"]
] as const;
