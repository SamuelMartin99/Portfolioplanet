
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    //motion,
    nextjs,
    nodejs,
    pricewise,
    mui,
    react,
    redux,
    sass,
    tailwindcss,
    threads,
    shopify,
    typescript,
    vite
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "compilation"
    },
    /* {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    }, */
    /* {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    }, */
     {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    /* {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    }, */
   /*  {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }, */
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: shopify,
        name: "shopify",
        type: "e-commerce",
    },
    /* {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    }, */
     {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {   
        title: "React.js Developer",
        icon: react,
        company_name: "portfolio",
        iconBg: "#282c34",
        date: "September 2024",
        points: [
            "En este proyecto, apliqué técnicas modernas de desarrollo para diseñar una interfaz de usuario atractiva completamente responsiva, asegurando una experiencia fluida optimizada en todos los dispositivos.","Integré elementos interactivos y animaciones 3D para ofrecer una experiencia única y dinámica, destacando mi capacidad para trabajar con tecnologías avanzadas."
        ],
    },

    {
        title: "Shopify",
        icon: shopify,
        company_name:"Frondaco shop",
        date:"July 2024",
        points: [
            "Sitio web de dropshipping creado con shopify"
        ],
    },

    {
        title: "Web Developer",
        company_name: "freelance",
        icon: javascript,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Desarrollo de interfaces web",
            "Creacion de formularios",
            "Implementacion de apis y frameworks para el desarrollo",
            "Desarrollo apps webs",
        ],
    },
   
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
        link: 'https://github.com/SamuelMartin99',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/samuel-martin-schulmaester/',
    }
];

export const projects = [
    
    {
        iconUrl: shopify,
        theme: 'btn-back-red',
        name: 'Tienda digital shopify',
        description: 'Desarrollé una pagina con shopify de e-commerce como practica para futuros proyectos, utilizando herramientas de la plataforma y agregando estilos css para mejorar el sitio',
        link: 'https://frondaco.shop/',
    },
    {
        iconUrl: css,
        theme: 'btn-back-pink',
        name: 'Diseño web Responsivo',
        description: 'Cree un Clon de Netflix en una de mis practicas, implementando un carrousel y efectos css. Uno de mis primeros proyectos',
        link: 'https://github.com/SamuelMartin99/clondenetflix2022', //luego agregar mas proyectos
    },
    

];