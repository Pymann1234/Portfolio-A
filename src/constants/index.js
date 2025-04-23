import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  bibleApp,
  iPhone,
  productStore,
  threejs,
  bel,
  next,
} from "../assets"; // Importing assets (icons, images) used in the project

// Navigation links for the header
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

// Services offered and skills
const services = [
  {
    title: "React.Js",
    icon: web,
  },
  {
    title: "Next.Js",
    icon: mobile,
  },
  {
    title: "Front-End",
    icon: backend,
  },
  {
    title: "Back-End",
    icon: creator,
  },
];

// Technologies and tools used
const technologies = [
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
    name: "Next JS",
    icon: next,
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
    name: "MongoDB",
    icon: mongodb,
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

// Work experiences with roles, companies, and responsibilities
const experiences = [
  {
    title: "Quality Assurance Associate – PCB",
    company_name: "Bharat Electronics Limited (BEL) – Bangalore, India",
    icon: bel,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Conducted visual and functional inspection of Printed Circuit Boards (PCBs) to ensure quality and compliance with design specifications",
      "Collaborated with the QA team to identify and document defects in electronic components.",
      "Created Goods Receipt (GR) entries post-inspection for approved PCBs, ensuring proper documentation and inventory tracking.",
    ],
  },
];

// Projects with descriptions, tags, images, and source code links
const projects = [
  {
    name: "Bible App",
    description:
      "A responsive Next.js web app to search and browse KJV Bible verses via manual input or dropdown. Features dark mode (with localStorage), TailwindCSS styling, and Bible API integration.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: bibleApp,
    source_code_link: "https://github.com/Pymann1234/theHolyBible",
  },
  {
    name: "iPhone 15 Website",
    description:
      "A React.js app, showcasing front-end skills and 3D animation using GSAP, Three.js. Built with modern front-end technologies to highlight product specifications, animations, and transitions",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: iPhone,
    source_code_link: "https://github.com/Pymann1234/apple",
  },
  {
    name: "MERN Product Store",
    description:
      "Full-stack product management app using React, Node.js, Express, and MongoDB with Zustand for state management. Features include CRUD operations, form validation, and responsive design",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: productStore,
    source_code_link: "https://github.com/Pymann1234/product-store",
  },
];

// Exporting constants for use in other components
export { services, technologies, experiences, projects };