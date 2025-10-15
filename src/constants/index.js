import {
  c,
  cpp,
  csharp,
  unity,
  creator,
  game,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  youthspire,
  rocketboost,
  obstacledodge,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: game,
  },
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "CSHARP",
    icon: csharp,
  },
  {
    name: "UNITY",
    icon: unity,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Youthspire",
    icon: youthspire,
    iconBg: "#383E56",
    date: "January 2025 - June 2025",
    points: [
      "Developed a Frontend of Breakmart-Admin dashboard with limited responsive design.",
      "Developed a Frontend using React.js with help of components React-Charts , React-icons and lucid-react.",
    ],
  },
];

const projects = [
  {
    name: "Rocket Boost",
    description:
      "A 3D platformer game where players pilot a rocket across floating platforms while dodging obstacles. Features physics-based boost mechanics, precise WASD controls, and progressive levels that test timing and spatial awareness.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "3DGame",
        color: "green-text-gradient",
      },
      {
        name: "CSharp",
        color: "pink-text-gradient",
      },
    ],
    image: rocketboost,
    source_code_link: "https://github.com/Priyesh-kekan/Rocket-Boost",
  },
  {
    name: "obstacle dodge",
    description:
      "An arcade-style dodge game featuring dynamic obstacles like spinning, targeting, and static barriers. Built with Unity to deliver smooth movement, challenging gameplay, and an engaging reflex-testing experience.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "3DGame",
        color: "green-text-gradient",
      },
      {
        name: "CSharp",
        color: "pink-text-gradient",
      },
    ],
    image: obstacledodge,
    source_code_link: "https://github.com/Priyesh-kekan/Obstacle-Dodge",
  },
  {
    name: "React Projects",
    description:
      "A collection of modern React.js web applications demonstrating hooks, state management, and reusable components. Focused on responsive design, clean architecture, and real-world UI functionality.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "WebApp",
        color: "pink-text-gradient",
      },
    ],
    image: rocketboost,
    source_code_link: "https://github.com/Priyesh-kekan/React_projects",
  },
  {
    name: "Java Projects",
    description:
      "A set of interactive mini-projects built with HTML, CSS, and JavaScript, focusing on DOM manipulation, event handling, and functional programming concepts. Includes practical tools and browser-based games.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "DOMManipulation",
        color: "green-text-gradient",
      },
      {
        name: "MiniProjects",
        color: "pink-text-gradient",
      },
    ],
    image: rocketboost,
    source_code_link: "https://github.com/Priyesh-kekan/JS_projects",
  },
];

export { services, technologies, experiences, projects };
