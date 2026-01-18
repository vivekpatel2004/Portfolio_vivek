import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  htmll,
  csss,
  javaScriptt,
  react_js,
  material_ui,
  ejs,
  node_js,
  express_js,
  postgresql,
  my_sql,
  gitt,
  githubb,
  postman,
  vs_code,
  project2,
  SnapDiet,
  Hotel,
  TODO,
  School,
  Python,
  Flask,
  Api,
  Monogo,
  Sql,
  Docker,
  Vercel,
  Aws,
  tailwind,
  text,
  FastApi,
} from "../assets/images";
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#aboutMe" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact Us", href: "#contact_us" },
];
export const role = ["Designer", "Developer", "Programmer"];
export const socialsIcons = [
  {
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/vivek-chaudhary-a5a483271/",
  },
  { Icon: GitHubIcon, url: "https://github.com/vivekpatel2004" },
];

export const skills = [
  {
    title: "Frontend",
    tech: [
      { label: "React JS", href: react_js },
      { label: "HTML", href: htmll },
      { label: "CSS", href: csss },
      { label: "Tailwind CSS", href: tailwind },
      { label: "JavaScript", href: javaScriptt },
      { label: "Material UI", href: material_ui },
      { label: "EJS", href: ejs },
    ],
  },
  {
    title: "Backend",
    tech: [
      { label: "Node JS", href: node_js },
      { label: "Express JS", href: express_js },
      { label: "Python", href: Python },
      { label: "Flask", href: Flask },
      { label: "FastAPI", href: FastApi },
      { label: "RestAPI", href: Api },
    ],
  },
  {
    title: "Databases",
    tech: [
      { label: "MongoDB", href: Monogo },
      { label: "MySQL", href: my_sql },
      { label: "PostgreSQL", href: postgresql },
      { label: "SQL", href: Sql },
    ],
  },
  {
    title: "Deployment",
    tech: [
      { label: "Vercel", href: Vercel },
      { label: "Docker", href: Docker },
      { label: "AWS (Basic)", href: Aws },
    ],
  },
  {
    title: "Others",
    tech: [
      { label: "Git", href: gitt },
      { label: "GitHub", href: githubb },
      { label: "Postman", href: postman },
      { label: "VS Code", href: vs_code },
    ],
  },
];

export const projects = [
  {
    title: "Royal Hotel",
    content:
      "Developed a full-stack hotel booking platform with user login, dashboard, room listings, and booking functionality using React, Node.js, and MongoDB for real-time data storage.",
    href: Hotel,
    link: "https://phoenicia-hotel.vercel.app/",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  {
    title: "SnapDiet",
    content:
      "Built an AI-powered food recognition system using a CNN model to provide food predictions, nutritional values, and recipe suggestions through a React frontend and FastAPI backend.",
    href: SnapDiet,
    link: "https://github.com/vivekpatel2004/SnapDiet",
    tech: ["React JS", "FastAPI", "Python", "CNN", "API"],
  },
  {
    title: "AI Text Summarizer",
    content:
      "Created an NLP-based summarization app leveraging transformer models for text compression. Integrated FastAPI backend with Hugging Face models and deployed the frontend via Vercel with environment-based configuration.",
    href: text,
    link: "https://ai-text-summarizer-gamma.vercel.app/",
    tech: ["React", "FastAPI", "Transformers", "Hugging Face", "Docker", "NLP"],
  },
  {
    title: "To-Do List",
    content:
      "Full-stack task management app with login system and CRUD operations using React frontend, Flask backend, and SQL database for persistent task storage.",
    href: TODO,
    link: "https://github.com/vivekpatel2004/To-do-List",
    tech: ["React JS", "Flask", "Python", "SQL", "CRUD", "Auth"],
  },
  {
    title: "School_Add",
    content:
      "Full-stack school management system featuring image upload and complete CRUD operations for school records using React frontend, Node.js backend, and SQL database.",
    href: School,
    link: "https://github.com/vivekpatel2004/School_Add",
    tech: ["React JS", "Node JS", "Express JS", "SQL", "CRUD", "File Upload"],
  },

  {
    title: "Weather",
    content:
      "Developed a responsive and visually appealing weather forecasting app using React JS, API , and JavaScript, showcasing modern layout and interactive elements to provide users with real-time weather updates.",
    href: project2,
    link: "https://vivekpatel2004.github.io/html-Weather-forecast/",
    tech: ["React JS", "API", "JavaScript"],
  },
];
