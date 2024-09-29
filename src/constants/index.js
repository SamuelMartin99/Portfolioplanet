
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
        date: "Sep 2024",
        points: [
            "En este proyecto, apliqué técnicas modernas de desarrollo para diseñar una interfaz de usuario atractiva completamente responsiva, asegurando una experiencia fluida optimizada en todos los dispositivos."
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
        date: "since 2022",
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
        iconUrl: react,
        theme: 'btn-back-pink',
        name: 'Portfolio 3D',
        description: 'Portfolio interactivo, con animaciones 3D. utilizando Three.js',
        link: 'https://github.com/SamuelMartin99/Page3d', //luego agregar mas proyectos
    },
    {
        iconUrl: shopify,
        theme: 'btn-back-red',
        name: 'Tienda digital shopify',
        description: 'Desarrollé una pagina con shopify para vender productos, utilizando herramientas de la plataforma y agregando estilos css para mejorar el sitio',
        link: 'https://frondaco.shop/',
    },
   

];