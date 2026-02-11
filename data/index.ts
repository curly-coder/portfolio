import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently studying a Next.js framework",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Animated Apple MacBook 3D Website",
    des: "Recreated the Apple MacBook website, combining GSAP animations and Three.js 3D effects",
    img: "/macbook.svg",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg"],
    link: "https://macbook-gsap-three.vercel.app/",
  },
  {
    id: 2,
    title: "Aventador Landing Page",
    des: "Aventador Landing Page - HTML/CSS/JavaScript pet-project with scroll reveal animation",
    img: "/p4.png",
    iconLists: ["/css.svg", "/html.webp", "/js.png"],
    link: "https://curly-coder.github.io/aventador-landing-page/",
  },
  {
    id: 3,
    title: "Brainwave",
    des: "BrainWave Landing Page - built with React and styled using Tailwind CSS.",
    img: "/3.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://curly-coder.github.io/brainwave/",
  },
  {
    id: 4,
    title: "JBL Headphones Website",
    des: "Headphones website - HTML/CSS/JavaScript pet-project with slider and scroll reveal animation",
    img: "/2.svg",
    iconLists: ["/css.svg", "/html.webp", "/js.png"],
    link: "https://curly-coder.github.io/headphones-website/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web App Developer",
    desc: "Created a personal portfolio website using Next.js and Tailwindcss to showcase my pet-projects and skills.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Worked on several frontend pet-projects using HTML, CSS, JavaScript, and React.js, focusing on UI and user interaction.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "WordPress Developer",
    desc: "Built and customized WordPress sites, including theme setup, plugin installation, and SEO optimization.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "E-commerce Website Development",
    desc: "Developed e-commerce websites using WooCommerce and Shopify, integrating payment systems and product catalogs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/curly-coder"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anastasiia-kumeda-542482164/"
  },
  {
    id: 3,
    img: "/telegram.png",
    link: "https://t.me/anastasia_kumeda"
  }
];