import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { htmll, csss, javaScriptt, react_js, material_ui, ejs, node_js, express_js, postgresql, my_sql, gitt, githubb, postman, vs_code, project1, project2, project3} from '../assets/images';
export const navLinks = [
    {label:"Home", href:"#home"},
    {label:"About Me", href:"#aboutMe"},
    {label:"Skills", href:"#skills"},
    {label:"Projects", href:"#projects"},
    {label:"Education", href:"#education"},
    {label:"Contact Us", href:"#contact_us"},
]
export const role = ["Designer", "Developer","Programmer"]
export const socialsIcons = [LinkedInIcon, GitHubIcon]
export const skills = [
    {
        title: "Frontend",
        tech:[
            {label: "React Js", href: react_js},
            {label: "HTML", href: htmll},
            {label: "CSS", href: csss},
            {label: "JavaScript", href: javaScriptt},
            {label: "Material UI", href: material_ui},
            {label: "EJS", href: ejs},
        ]
    },
    {
        title: "Backend",
        tech:[
            {label: "Node JS", href: node_js},
            {label: "Express JS", href: express_js},
            {label: "MySQL", href: my_sql},
            {label: "Postgresql", href: postgresql},
        ]
    },
    {
        title: "Others",
        tech:[
            {label: "Git", href: gitt},
            {label: "GitHub", href: githubb},
            {label: "Postman", href: postman},
            {label: "VS code", href: vs_code},
        ]
    }
]
export const projects = [
    {
        title: "Netflix",
        content: "Created a Netflix login page replica that offers users a sleek and intuitive interface, utilizing HTML, CSS, and JavaScript to closely mimic the original design while ensuring a clean and user-friendly experience.",
        href: project1,
        link: "https://vivekpatel2004.github.io/html-Netflix/",
        tech:["Html", "CSS", "JavaScript"]
    },
    {
        title: "Portfolio Website",
        content: "Designed and developed a personal portfolio website to showcase my web development projects and skills. Features a clean, modern design with detailed project descriptions and live demos.",
        href: project3,
        link: "#",
        tech:["React JS", "Tailwind CSS", "JavaScript"]
    },
    {
        title: "Weather",
        content: "Developed a responsive and visually appealing weather forecasting app using React JS, API , and JavaScript, showcasing modern layout and interactive elements to provide users with real-time weather updates.",
        href: project2,
        link: "https://vivekpatel2004.github.io/html-Weather-forecast/",
        tech:["React JS", "API",  "JavaScript"]
    }
]
