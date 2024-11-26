import {
  backend,
  ilms,
  creator,
  css,
  html,
  javascript,
  mobile,
  nodejs,
  tailwind,
  typescript,
  web,
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

const products = [
  {
    title: "Digital Twin Insight",
    icon: web,
  },
  {
    title: "Global Facility Network",
    icon: mobile,
  },
  {
    title: "Intelligent Asset Tracking",
    icon: backend,
  },
  {
    title: "Seamless Platform Integration",
    icon: creator,
  },
  {
    title: "Cross-site Analytics",
    icon: web,
  },
  {
    title: "Scalable Pilot Solutions",
    icon: mobile,
  },
];

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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const features = [
  {
    title: "2D Plans",
    company_name:
      "Visualize and interact with traditional 2D drawings effortlessly.",
    icon: web,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
  {
    title: "P&ID Diagram",
    company_name:
      "Access detailed piping and instrumentation designs with precision.",
    icon: mobile,
    iconBg: "#E6DEDD",
  },
  {
    title: "Media Files & Documents",
    company_name: "Organize and view associated project files in one place.",
    icon: backend,
    iconBg: "#E6DEDD",
  },
  {
    title: "CAD & BIM Models",
    company_name: "Integrate and explore advanced 3D designs seamlessly.",
    icon: creator,
    iconBg: "#E6DEDD",
  },
  {
    title: "GIS Mapping",
    company_name: "Map assets and locations with dynamic geospatial tools.",
    icon: web,
    iconBg: "#E6DEDD",
  },
  {
    title: "Reality Capture Devices & Sensors",
    company_name:
      "Incorporate real-world data from advanced capture technologies.",
    icon: mobile,
    iconBg: "#E6DEDD",
  },
  {
    title: "External System Integration & Reporting Dashboard",
    company_name:
      "Connect systems and visualize key metrics through intuitive dashboards.",
    icon: backend,
    iconBg: "#E6DEDD",
  },
  {
    title: "And More Bespoke Solution",
    company_name: "Tailored integrations to meet your unique project needs.",
    icon: creator,
    iconBg: "#E6DEDD",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Immersive Learning System",
    description:
      "Developing a app-based platform that integrates Virtual Reality (VR) spaces with a Learning Management System (LMS) to enhance the training and knowledge of ship inspectors from the Australian Maritime Safety Authority and SSI-COE.",
    tags: [
      {
        name: "vr",
        color: "blue-text-gradient",
      },
      {
        name: "lms",
        color: "green-text-gradient",
      },
    ],
    image: ilms,
    project_preview: "#",
  },
  {
    name: "Immersive Learning System",
    description:
      "Developing a app-based platform that integrates Virtual Reality (VR) spaces with a Learning Management System (LMS) to enhance the training and knowledge of ship inspectors from the Australian Maritime Safety Authority and SSI-COE.",
    tags: [
      {
        name: "vr",
        color: "blue-text-gradient",
      },
      {
        name: "lms",
        color: "green-text-gradient",
      },
    ],
    image: ilms,
    project_preview: "#",
  },
  {
    name: "Immersive Learning System",
    description:
      "Developing a app-based platform that integrates Virtual Reality (VR) spaces with a Learning Management System (LMS) to enhance the training and knowledge of ship inspectors from the Australian Maritime Safety Authority and SSI-COE.",
    tags: [
      {
        name: "vr",
        color: "blue-text-gradient",
      },
      {
        name: "lms",
        color: "green-text-gradient",
      },
    ],
    image: ilms,
    project_preview: "#",
  },
];

export { products, technologies, features, testimonials, projects };
