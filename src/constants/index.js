import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import urd from "../assets/company/urd.jpg";
  import python from "../assets/tech/python.png";
  import R from "../assets/tech/R.png";
  import powerbi from "../assets/tech/powerbi.png";
  import tableau from "../assets/tech/tableau.png";
  import excel from "../assets/tech/excel.png";
  import hadoop from "../assets/tech/hadoop.png";
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
      title: "AI Developer",
      icon: mobile,
    },
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon:  python,
    },
    {
      name: "R",
      icon: R,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Power Bi",
      icon: powerbi,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Tabeau",
      icon: tableau,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "hadoop",
      icon: hadoop,
    },
  ];
  
  const experiences = [
    {
      title: "Front End Developer",
      company_name: "URD Solutions",
      icon: urd,
      iconBg: "#383E56",
      date: "Jaunary 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Anpr System",
      icon: urd,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Nov 2022",
      points: [
      "Developing and maintaining the ANPR system using Python, OpenCV, and EasyOCR, along with other related technologies.",
    
    "Implementing a responsive and accurate recognition system, ensuring compatibility across various image inputs and environments.",
    "Participating in code reviews and providing constructive feedback to improve the accuracy and performance of the ANPR system.",
      ],
    },
    {
      title: "Breast Cancer Prediction",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Developing and maintaining a Breast Cancer Prediction system using machine learning models and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility for the prediction system interface.",
        "Participating in code reviews and providing constructive feedback to improve model accuracy and performance.",
      ],
    },
    {
      title: "MITWPU ERP System Developer",
      icon: urd,
      iconBg: "#E6DEDD",
      date: "August 2024 - Present",
      points: [
        "Developing and maintaining the MITWPU ERP system using modern web technologies and ensuring seamless data integration.",
        "Collaborating with  teams and other developers to create a user-friendly, high-quality ERP solution.",
        "Implementing responsive design and ensuring cross-browser compatibility for the ERP system interface.",
        "Participating in code reviews and providing constructive feedback to improve the overall performance and scalability of the ERP system."
      ]
    },
    {
      title: "Game Analytics: Player Behaviour & Mental Health in India",
      icon: urd,
      iconBg: "#E6DEDD",
      date: "August 2024 - Present",
      points: [
        "Conducting research and developing analytics solutions to study player behavior and mental health trends in the Indian gaming community.",
        "Collaborating with psychologists, data analysts, and gaming industry experts to analyze data and create actionable insights.",
        "Implementing data visualization techniques and ensuring accurate representation of player behavior metrics.",
        "Participating in data review sessions and providing actionable insights to improve mental health awareness and well-being among players."
      ]
    }
  
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };