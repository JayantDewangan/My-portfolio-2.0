// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import reactRouterLogo from './assets/tech_logo/react_router_logo.png'
import intelliJLogo from './assets/tech_logo/intelliJ_logo.png'

// Education Section Logo's
import mvmLogo from './assets/education_logo/mvm_logo.jpg'
import KiitLogo from './assets/education_logo/kiit_logo.png'

// Project Section Logo's
import syntaxaCodeEditor from './assets/work_logo/syntaxaCodeEditor.png';
import educator from './assets/work_logo/educator.png';
import flappyBird from './assets/work_logo/flappyBird.png';
import weather from './assets/work_logo/weather.png';
import movieGuide from './assets/work_logo/movieGuide.png';
import neatzy from './assets/work_logo/neatzy.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'React Router', logo: reactRouterLogo},
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'IntelliJ Idea', logo: intelliJLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

 
  export const education = [
    {
      id: 0,
      img: KiitLogo,
      school: "Kalinga Institute Of Industrial Technology, Bhubaneshwar",
      date: "July 2023 - May 2027",
      grade: "9.64 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (BTech) in Computer Science and Engineering at Kalinga Institute of Industrial Technology (KIIT), Bhubaneshwar. My academic journey has equipped me with a strong foundation in core computer science subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development. I am actively involved in hands-on projects that focus on scalable web applications, educational platforms, and real-world API integrations. I also participate in technical workshops and coding contests to sharpen my problem-solving and development skills. My time at KIIT is shaping me into a well-rounded engineer with both theoretical depth and practical experience.",
      degree: "BTech in Computer Science and Engineering",
    },
    {
      id: 1,
      img: mvmLogo,
      school: "Maharishi Vidya Mandir-1, Raipur (C.G)",
      date: "Apr 2021 - March 2022",
      grade: "95.2%",
      desc: "I completed my class 12 education from Maharishi Vidya Mandir, Raipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Informatics Practices.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: mvmLogo,
      school: "Maharishi Vidya Mandir-1, Raipur (C.G)",
      date: "Apr 2019 - March 2020",
      grade: "94.2%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Syntaxa - Your Personal Code Editor",
      description:
        "Syntaxa is a lightweight and user‑friendly code editor built using HTML, CSS, and JavaScript with Ace Editor integration. It provides syntax highlighting, smooth editing, and a clean interface for writing and experimenting with code directly in the browser. Designed to be simple yet powerful, Syntaxa helps developers, learners, and hobbyists quickly test ideas and practice coding without the need for heavy IDEs.",
      image: syntaxaCodeEditor,
      tags: ["HTML", "CSS", "JavaScript", "Ace Editor"],
      github: "https://github.com/JayantDewangan/Syntaxa-Code-Editor.git",
      webapp: "https://jayantdewangan.github.io/Syntaxa-Code-Editor/",
    },
    {
      id: 1,
      title: "EDUCATOR - An-Education-Website",
      description:
        "A fully responsive, multipage website crafted using pure HTML, CSS, and JavaScript—no frameworks, just clean, efficient code. Designed to deliver a seamless experience across laptops, tablets, and mobile devices. Includes a contact form powered by Formspree for smooth and secure form submissions. This project showcases my front-end development skills, attention to responsive design, and ability to build scalable layouts from scratch.",
      image: educator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JayantDewangan/EDUCATOR---An-Education-Website.git",
      webapp: "https://jayantdewangan.github.io/EDUCATOR---An-Education-Website/",
    },
    {
      id: 2,
      title: "Flappy Bird Game",
      description:
        "A high-fidelity recreation of the viral 'Flappy Bird' arcade game. This project features a physics-based engine that simulates gravity and collision detection as the player navigates a bird through a series of obstacles. It includes real-time score tracking, responsive controls optimized for both desktop and mobile, and 'Game Over' state with high-score persistence.",
      image: flappyBird,
      tags: ["JavaScript", "HTML5 Canvas", "CSS", "Game Development"],
      github: "https://github.com/JayantDewangan/Flappy-Bird-Game-.git",
      webapp: "https://jayantdewangan.github.io/Flappy-Bird-Game-/",
    },
    {
      id: 3,
      title: "Weather Prediction WebApp",
      description:
        "A dynamic weather dashboard that provides real-time meteorological data for cities worldwide. By integrating a third-party Weather API, the app delivers accurate information on temperature, humidity, wind speeds, and atmospheric conditions. It features a responsive UI that updates dynamically based on user search queries, offering a seamless experience across all devices.",
      image: weather,
      tags: ["JavaScript", "API Integration", "HTML5", "CSS3", "JSON"],
      github: "https://github.com/JayantDewangan/Weather-app.git",
      webapp: "https://jayantdewangan.github.io/Weather-app/",
    },
    {
      id: 4,
      title: "Neatzy - Laundary Services",
      description:
        "A professional, single-page business website designed for a laundry and dry-cleaning service. The platform features a clean, modern UI to showcase various cleaning packages, pricing, and service workflows. It includes an integrated contact system powered by EmailJS, allowing users to send inquiries or book services directly from the web interface.",
      image: neatzy,
      tags: ["HTML5", "CSS3", "JavaScript", "EmailJS", "Responsive Design"],
      github: "https://github.com/JayantDewangan/Neatzy---Laundary-Services.git",
      webapp: "https://jayantdewangan.github.io/Neatzy---Laundary-Services/",
    },
    {
      id: 5,
      title: "Movie Guide WebApp",
      description:
        "A comprehensive movie discovery platform that allows users to search for and explore detailed information about thousands of films. By leveraging a RESTful Movie API, the app provides real-time data including plot summaries, ratings, cast lists, and release dates. It features a modern, card-based layout and a dynamic search bar for an effortless browsing experience.",
      image: movieGuide,
      tags: ["JavaScript", "REST API", "HTML5", "CSS3", "Asynchronous JS"],
      github: "https://github.com/JayantDewangan/Movie-Guide-App.git",
      webapp: "https://jayantdewangan.github.io/Movie-Guide-App/",
    },
  ];  

  export const achievements = [
    {
      title: "Smart India Hackathon 2024 Finalist",
      issuer: "Ministry of Education (MoE), AICTE",
      description: "Developed a prototype text-to-code solution, placing in the top finalists nationally among thousands of teams.",
      icon: "🏆"
    },
    {
      title: "LeetCode 500+ Solved",
      issuer: "LeetCode",
      description: "Successfully solved over 500 algorithm & data structure problems, consistently ranked in contest ratings.",
      icon: "💻"
    },
    {
      title: "Google Cloud Ready Facilitator",
      issuer: "Google Cloud",
      description: "Completed multiple tracks on Cloud Infrastructure, Data ML, and guided peers in Google Cloud fundamental tools.",
      icon: "☁️"
    }
  ];