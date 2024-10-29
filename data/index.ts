export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    title: "Currently building a JS Animation library",
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
    title: "Modern Blog",
    des: "Discover engaging content with a modern blog application built using Astro.js and integrated with a CMS.",
    img: "/modern-blog.png",
    iconLists: ["/Astro.svg", "/tail.svg", "/ts.svg", "/Sanity-logo.svg", "/netlify.svg"],
    link: "https://modern-blog-test.netlify.app/",
  },
  {
    id: 2,
    title: "DMS - CMS application",
    des: "Streamline business operations with a robust CRM application developed using the MERN stack.",
    img: "/dms.png",
    iconLists: ["/react.svg", "/tail.svg", "/logo-javascript.svg", "/socketIo.png", "/nodejs.svg"],
    link: "/ui.yoom.com",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Working with Amine was a game-changer for our team. His attention to detail and innovative solutions helped us exceed our goals. I highly recommend him for any development project.",
    name: "Sarah Thompson",
    title: "Project Manager at Innovative Solutions",
    img: "entrepreneur2.jpg"
  },
  {
    quote:
      "Amine's expertise and commitment were invaluable to our project. He consistently delivered high-quality work on time, making the entire process seamless and enjoyable.",
    name: "Nour Bagane",
    title: "Freelancer",
    img: "/nour.jpg"
  },
  {
    quote:
      "Amine brought our vision to life with creativity and precision. His collaborative approach made a significant difference, and we couldn't be happier with the results.",
    name: "Emily Rodriguez",
    title: "Marketing Director at Bright Ideas Agency",
    img: "entrepreneur1.jpg"
  },
  {
    quote:
      "I was thoroughly impressed with Amine's skills and work ethic. He tackled challenges head-on and provided solutions that greatly improved our project outcomes.",
    name: "David Lee",
    title: "Upwork Freelancer",
    img: "entrepreneur3.jpg"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
  id: 5,
  name: "Socket.Io",
  img: "/SocketIo.png",
  nameImg: "Socket.Io",
}
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Develop stock managment application using React & Tailwind Css",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    desc: "Designed and developed a CRM application using the MERN stack, integrating real-time chat functionality with Socket.io to enhance user engagement and communication efficiency.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Develop e-commerce application using NextJs and NestJs with integratingThe platform includes features such as payment integration, support for multiple international languages, currency selection and conversion, dynamic pricing, and Cloudinary integration for image storage.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "FullStack Developer",
    desc: "Developed a blog application with Astro.js, integrating Sanity for dynamic content management and enhancing user experience with visual effects, resulting in a performant and appealing platform.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AmineGaf",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/amine-gafsi-122772277/"
  },
];
