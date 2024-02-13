import { it_tech , acm, supereasy, elite, gdsc } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    bootstrap,
    c,
    cpp,
    mysql,
    php
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Nextjs",
    //     type: "Full stack",
    // },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: cpp,
        name: "Cpp",
        type: "Language",
    },

];


export const experiences = [
    {
        title: "INTERN",
        company_name: "SuperEasy Technologies LLP, Pune",
        icon: supereasy,
        iconBg: "#a2d2ff"  ,
        date: "Dec 2023 - Jan 2024",
        points: [
            "Developed web applications using React.js and related technologies.",
            "Collaborated with cross-functional teams to create high-quality products.",
            "Ensured responsive design and cross-browser compatibility.",
            "Participated in code reviews and provided constructive feedback."
        ]
    },
    {
        title: "WEBMASTER",
        company_name: "ACM MMCOE, Pune",
        icon: acm,
        iconBg:  "#accbe1",
        date: "Jun 2023 - Present",
        points: [
            "Developed and maintained club website with focus on user experience.",
            "Engaged in technical and social aspects, contributing to the community.",
            "Improved online presence and attracted wider audience.",
            "Organized technical and social events, fostering knowledge sharing."
        ]
    },
    {
        title: "DEVELOPMENT HEAD",
        company_name: "",
        icon:  it_tech,
        iconBg: "#fbc3bc",
        date: "Jun 2023 - Present",
        points: [
            "Led development team with friendly nature .",
            "Conducted sessions on web development with React.js.",
            "Assisted team members in solving development challenges.",
            "Fostered collaborative work environments."
        ]
    },
    {
        title: "DEVELOPMENT TEAM MEMBER",
        company_name: "GDSC MMCOE, Pune",
        icon: gdsc,
        iconBg: "hsl(43.25deg 96.75% 37.3%)",
        date: "Jun 2023 - Present",
        points: [
            "Actively contributed as team member.",
            "Led session on Kotlin Android development.",
            "Worked collaboratively on various projects.",
            "Prepared to lead web development workshops."
        ]
    },
    {
        title: "INTERN & TRAINING",
        company_name: "Elite Softwares, Pune",
        icon: elite,
        iconBg: "hsl(103.37deg 94.46% 64.12%)",
        date: "Dec 2022 - March 2023",
        points: [
            "Worked as intern, provided training by team leader and supervisor.",
            "Focused on Django, PHP, Bootstrap tech stack.",
            "Structured internship like a course.",
            "Focused on learning and practical application."
        ]
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/umakant3525',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/umakant-shinde-22b834252/',
    }
];


export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Bootstrap Page Clone',
        description: 'Developed a web app in normal HTML, CSS, and JavaScript for learning and improving my frontend skills.',
        link: 'https://umakant3525.github.io/bootstrap_page_clone/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: '3D GSAP Page',
        description: 'Learning and exploring 3D animation with GSAP library through tutorials on SheriJS YouTube channel.',
        link: 'https://umakant3525.github.io/3dweb_gsap/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Disney Clone in React',
        description: 'Made Disney clone for React basic learning purposes to improve my React skills.',
        link: 'https://disey-clone-fgsi2d2nb-umakant-shindes-projects.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Youtube Clone',
        description: 'Made YouTube clone for frontend skill improvement using simple HTML, CSS, and JavaScript, with a toggle sidebar.',
        link: 'https://umakant3525.github.io/youtube_clone/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Chatboat with ChatGPT',
        description: 'Made chatbot with ChatGPT API integration. Currently, the tokens are limited, so it may not respond, but the functionality is working well.',
        link: 'https://umakant3525.github.io/chatbot_api/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'My First Portfolio',
        description: 'I made this portfolio in HTML, CSS, and JavaScript, showcasing my skills in color and theme changing. This is my first portfolio.',
        link: 'https://umakant3525.github.io/portfolio_1/',
    }
];
