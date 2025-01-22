/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Target Practice",
    date: "2024 - Present",
    description: "AI-Powered Target Practice Scoring App\nWorking as part of a dynamic team, I contributed to the development of an innovative mobile application designed for target practice enthusiasts. Built using React.js and Capacitor, this app leverages advanced AI algorithms to detect shots, evaluate their accuracy, and assign scores in real-time. The project focuses on enhancing training experiences with precise feedback, intuitive design, and seamless cross-platform functionality.\n\nTechs: React.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Redux, Capacitor.",
  },
  {
    id: 2,
    name: "Focalpay",
    description: `Focal Pay is a true omni-channel shopping and payments system which enables merchants to utilize their personnel for the actual job, which is serving the customers rather than getting orders, payment and delivering receipts. At the same time Focal Pay provides the customer with a superior shopping experience by eliminating the need for standing in queues, being stressed to put their orders and managing paper receipts.

- Published both iPhone and Android applications using React-Native
- Integrated the Google Firebase RealTime Database, Maps SDK and Cloud Messaging as Notification Service
- Worked on the REST based web services to send the JSON response using Java SpringBoot
- Created and implemented custom UI controls for various functions such as custom Animation, panning and gesture recognition
- hands-on working with WEBRTC and WEB SOCKET to make peer-to-peer Video Chat
- using keycloak for SSO
https://focalpay.se/
Focal Pay is a true omni-channel shopping and payments system which enables merchants to utilize their personnel for the actual job, which is serving the customers rather than getting orders, payment and delivering receipts. At the same time Focal Pay provides the customer with a superior shopping experience by eliminating the need for standing in queues, being stressed to put their orders and managing paper receipts. - Published both iPhone and Android applications using React-Native - Integrated the Google Firebase RealTime Database, Maps SDK and Cloud Messaging as Notification Service - Worked on the REST based web services to send the JSON response using Java SpringBoot - Created and implemented custom UI controls for various functions such as custom Animation, panning and gesture recognition - hands-on working with WEBRTC and WEB SOCKET to make peer-to-peer Video Chat - using keycloak for SSO https://focalpay.se/\n\nTechs: React.js, JavaScript, HTML, CSS, Material UI, Redux.`,
    date: "2021 - 2024",
    demoLink: "https://www.focalpay.app/merchant-v2/login",
  },
  {
    id: 3,
    name: "BMS",
    description: `Battery management system is a React-based web application for monitoring and managing battery systems with advanced role-based access control. Key features include:

- Real-time visualization of battery data, including resistance, current, voltage, temperature, and more.
- Interactive charts to track historical and live performance metrics.
- Fault detection and warning system to promptly alert users about potential issues.
- Customizable configurations to optimize battery usage and performance.
- Role-based access control to restrict actions based on user roles, ensuring secure and efficient management.
This application combines data visualization, user management, and security, offering a comprehensive solution for battery system monitoring and maintenance.\n\nTechs: React.js, JavaScript, HTML, CSS, Material UI, Redux.`,
    date: "2022 - 2022",
    demoLink: "https://epcobms.ir",
  },
  {
    id: 4,
    name: "Nakisa",
    description: `Nowadays modern communication systems are incomplete without integration. When working with two, three, or more security and communication applications from multiple vendors, user effectiveness quickly becomes constrained. At the extreme, it means dealing with over half a dozen monitoring and management applications; operators and administrators are easily overwhelmed by the sheer number of user applications and by the amount of knowledge they need to acquire to perform their work. When you add maintenance of all those applications and upgrades over time to the equation, it is easy to see how your security and IT teams can become overloaded. Unified security platforms, with embedded security applications, sidestep these pitfalls altogether. 

Nakisa is an integration software to manage LCS subsystems based on pre-defined scenarios and events.

deployed at:
- Telecommunication systems For Shiraz Metro organization (SURO)
- 10 LCS Systems such as CCTV, FireAlarm, ACS, ... - AtlasMALL - Tehran\n\nTechs: React.js, JavaScript, HTML, CSS, Material UI, Redux.`,
    date: "2020 - 2021",
  },
  {
    id: 5,
    name: "Sarv Shiraz",
    description: `Sarv Shiraz Citizenship System has emerged with the aim of facilitating the provision of services to the citizens of Shiraz. This project belongs to Shiraz Municipality and the executor of this project is the information technology team of Arya Hamrah Company.
Some meticulous details are:
- communicating with SSO (keycloak) for the purpose of authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.
- Sharding and replicating MongoDB with the intention of divide, categorize, and organize data into manageable chunks
- Adhere to OWASP standards 
- Establish an intelligent connection to government systems and interfaces for authentication such as:
authenticating and validating NationalCode, PostalCode, PostalCode coordination & geolocation and etc.
-Using ElasticSearch as search engine in order to provide distributed, multitenant-capable full-text search engin.
- Providing LoadBalancer through Nginx.
- Implement Flexible and cognitive Web Application consisting of numerous capabilities and services using ReactJS.\n\nTechs: React.js, JavaScript, HTML, CSS, Material UI, Redux.`,
    date: "2020 - 2021",
    demoLink: "https://sarv.shiraz.ir/",
  },
  {
    id: 6,
    name: "Shiraz Car Toll",
    description: `Shiraz Car Toll (Avarez) is a project for Shiraz citizens to pay their cars tax with various features such as integration with Sarv Shiraz project (citizenship application of Shiraz municipality). Currently it's handling more than 1 million cars and more than 100 thousand requests per day.\n\nTechs: React.js, JavaScript, HTML, CSS, Material UI, Redux.`,
    date: "2020 - 2021",
    demoLink: "https://cartax.shiraz.ir/home",
  },
  {
    id: 7,
    name: "AryaAir",
    description: `Developed an Android application that provides real-time data on Iran's airlines and flights. The app enables users to:

- View detailed flight information, including schedules and statuses.
- Mark flights as favorites for quick access.
- Receive push notifications on flight status updates, ensuring users stay informed.
The app was built with a focus on usability, performance, and delivering accurate, real-time data, enhancing the travel experience for users.\n\nTechs: Java, Android, Google Material Design.`,
    date: "2017 - 2018",
  },
  {
    id: 8,
    name: "AryaVision",
    description: `Cloud-based data exploration, beautiful charts and interactive dashboards for business and data teams
Used in one of Iran Payment service provider (FanavaCard) 
https://www.fanavacard.ir/
- CONNECT: Integrate your disparate data (Sql, NoSql, Flat Files)
- EXPLORE: Easily explore data and build complex queries with Interactive or SQL Mode
- TRANSFORM: Immediately blend and transform your data via our powerful Data Pipeline
- VISUALIZE: Live, auto-refreshing dashboards and interactive charts anyone can use.\n\nTechs: React.js, JavaScript, HTML, CSS, Material UI, Redux.`,
    date: "2017 - 2018",
  },
];

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/mohsen-tavakoli95",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mohsen-tavakoli-18a632232",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Tavakoli-mohsen.pdf",
    icon: "resume",
    newTab: true,
  },
];


