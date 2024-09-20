import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - August 2024",
    role: "Web Developer Intern",
    company: "The Sparks Foundation",
    description: `Designed and developed a basic Banking system that allowed users to transfer money between accounts and view their transaction history, using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["React.js","Node.js","Express.js","mongoDB","Tailwind CSS"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Software Developer Intern",
    company: "GrapplTech",
    description: `Designed and developed reuseable component and template for web applications using React.js and Tailwind CSS. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Tailwind CSS"],
  }
];

export const PROJECTS = [
  {
    title: "FlatBase",
    link: "https://github.com/adityap5/FlatBase",
    image: project1,
    description:
      "Developed a seamless platform for booking accommodations based on location & price. User registration/login using JWT and bcrypt, role assignment, property listings with image uploads by using Multer and Cloudinary and flat search by location. ",
    technologies: ["React.js", "Node.js", "Express.js","MongoDB Atlas" , "Tailwind CSS","Redux"],
  },
  {
    title: "CineVerse",
    link: "https://cineverse-ap.netlify.app/",
    image: project2,
    description:
      " Developed a platform using React JS for users to search for movies and TV shows by name. Designed dedicated pages with content organized by genres, refined searches by genres, popularity, and ratings. Utilized Redux-toolkit to efficiently manage state, reducing API calls by caching data, improving the user experience",
    technologies: ["React.js", "Redux-Toolkit" ,"SCSS", "API Integration"],
  },
  {
    title: "RECOMMERCE",
    link: "https://recommerce-ap.netlify.app",
    image: project3,
    description:
      "Developed a E-commerce platform and Integrated with Fake Store API for a wide range of products. Designed User-friendly navigation and efficient cart management. Sleek and modern design for a seamless shopping experience.",
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "API Integration"]
  },
  {
    title: "BlogAPI",
    link: "https://github.com/adityap5/blog-API",
    image: project4,
    description:
      "Developed a RESTful API for a blogging platform designed CRUD operations for blog posts. Create user authentication and authorization using JWT and bcrypt for secure access control. Used Postman for API testing and documentation, ensuring a well-documented API for frontend integration.",
    technologies: ["Node.js", "Express.js", "Postman", "MongoDB", "bcrypt","JWT"],
  },
  {
    title: "ChatNest",
    link: "https://github.com/adityap5/ChatNest",
    image: project4,
    description:
      "Developed a seamless Real-Time communication WebApp with  Express.js for robust backend handling, and Socket.io for efficient real-time messaging, ChatNest empowers users to connect and chat instantly.",
    technologies: ["Node.js", "Express.js", "Socket.io"],
  },
];

export const CONTACT = {
  address: "Boys Hostel-4 Panjab University, Sector-14 ",
  phoneNo: "+91-8859839210",
  email: "aditya29pippal@gmail.com",
};
