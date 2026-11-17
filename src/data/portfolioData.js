export const personalInfo = {
  name: "Sunand T",
  role: "Senior Full Stack Developer & MERN Specialist",
  tagline: "Crafting scalable, high-performance web applications and sleek digital experiences.",
  shortIntro: "Hi, I’m Sunand T, a passionate Senior Full Stack Developer and Web Designer specializing in the MERN stack with proven experience creating responsive, high-impact web applications.",
  bio: "I am a dedicated Senior Full Stack Developer with hands-on industry experience building modern, scalable web applications from conception to production deployment. Currently working as a Senior Full Stack Developer at Hexa Branding, and previously at Bloombiz Creatives. I blend clean backend architecture with polished, intuitive user interfaces.",
  cvUrl: "/assets/images/SUNAND_T_CV (1).pdf",
  heroImage: "/assets/images/about/WhatsApp Image 2025-08-08 at 12.05.22_949dd62e.jpg",
  aboutImage: "/assets/images/about/sunand-about-new.jpg",
  email: "sunandt2003@gmail.com",
  phone: "+91-7510399453",
  address: "Calicut, Kerala, India",
  availableForHire: true,
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/sunand2003/",
    github: "https://github.com/SUNAND2003",
    whatsapp: "https://wa.me/917510399453"
  }
};

export const counters = [
  {
    value: 2,
    display: "2",
    suffix: "+",
    title: "Years Experience"
  },
  {
    value: 15,
    display: "15",
    suffix: "+",
    title: "Completed Projects"
  },
  {
    value: 98,
    display: "98",
    suffix: "%",
    title: "Client Satisfaction"
  },
  {
    value: 2,
    display: "2",
    suffix: "",
    title: "Companies Worked"
  }
];

export const workExperience = [
  {
    id: "exp-1",
    company: "Hexa Branding",
    role: "Senior Full Stack Developer",
    period: "1 Year (Current)",
    status: "Current Role",
    location: "Calicut, Kerala",
    description: "Leading the design, development, and deployment of complex full-stack web applications for agency clients. Driving architectural decisions, building robust RESTful APIs, optimizing frontend responsiveness, and integrating secure payment and auth gateways.",
    highlights: [
      "Architected and deployed full-stack client web applications using React.js, Node.js, Express, and MongoDB.",
      "Engineered responsive, mobile-first interfaces with modern UI/UX practices and seamless API integrations.",
      "Optimized database queries and cloud deployments across Vercel, Netlify, and AWS.",
      "Collaborated with cross-functional teams to translate brand requirements into high-performing digital solutions."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "AWS / Cloud", "Tailwind CSS", "JavaScript ES6+"]
  },
  {
    id: "exp-2",
    company: "Bloombiz Creatives",
    role: "Full Stack Web Developer",
    period: "7 Months",
    status: "Previous Experience",
    location: "Kerala, India",
    description: "Developed and maintained full-scale responsive web solutions, e-commerce stores, and corporate websites. Collaborated closely with UI/UX designers and marketing teams to produce pixel-perfect, high-converting digital products.",
    highlights: [
      "Developed interactive frontend components and reusable UI libraries for diverse client niches.",
      "Built backend endpoints, form handlers, and content management workflows.",
      "Improved site load speeds, mobile responsiveness, and cross-browser consistency.",
      "Delivered quality projects on tight schedules with client communication and support."
    ],
    technologies: ["React.js", "JavaScript", "HTML5 / CSS3", "Bootstrap", "Node.js", "MongoDB", "Git & GitHub"]
  }
];

export const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: "Advanced", icon: "ri-reactjs-line" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "ri-javascript-line" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "ri-html5-line" },
      { name: "Bootstrap 5", level: "Expert", icon: "ri-bootstrap-line" },
      { name: "Tailwind CSS", level: "Advanced", icon: "ri-css3-line" },
      { name: "Responsive UI/UX", level: "Expert", icon: "ri-layout-masonry-line" }
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "ri-nodejs-line" },
      { name: "Express.js", level: "Advanced", icon: "ri-server-line" },
      { name: "MongoDB & Mongoose", level: "Advanced", icon: "ri-database-2-line" },
      { name: "RESTful APIs", level: "Advanced", icon: "ri-code-box-line" },
      { name: "Authentication (JWT/OAuth)", level: "Intermediate", icon: "ri-shield-keyhole-line" }
    ]
  },
  {
    name: "Deployment & Tools",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "ri-github-fill" },
      { name: "Vercel / Netlify", level: "Advanced", icon: "ri-cloud-line" },
      { name: "AWS Basics", level: "Intermediate", icon: "ri-cloud-windy-line" },
      { name: "Postman API Testing", level: "Advanced", icon: "ri-send-plane-line" },
      { name: "Figma to Code", level: "Advanced", icon: "ri-paint-brush-line" }
    ]
  }
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "mern", name: "MERN & Full Stack" },
  { id: "ecommerce", name: "E-Commerce" },
  { id: "webapp", name: "Web Applications" },
  { id: "media", name: "News & Media" }
];

export const projects = [
  {
    id: 1,
    title: "Bystander Care",
    category: "webapp",
    categoryLabel: "Healthcare & Caregiving Platform",
    description: "A specialized healthcare and caregiver platform connecting families with verified hospital bedside attendants, certified nurses, and in-home care services.",
    image: "/assets/images/projects/bystandercare-cover.jpg",
    liveDemo: "https://bystandercare.com/",
    github: "https://github.com/SUNAND2003",
    tags: ["Healthcare Platform", "Caregiver Booking", "Hospital Bedside", "Responsive UI"],
    featured: true
  },
  {
    id: 2,
    title: "Malayalamithram Online",
    category: "media",
    categoryLabel: "News & Media",
    description: "A feature-rich Malayalam news portal delivering real-time news updates, editorial stories, category feeds, and dynamic content delivery.",
    image: "/assets/images/projects/malayalam-cover.jpg",
    liveDemo: "https://malayalamithramonline.com/",
    github: "https://github.com/SUNAND2003",
    tags: ["Web Portal", "Responsive", "News API", "SEO Ready"],
    featured: true
  },
  {
    id: 3,
    title: "Village Allure",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description: "A luxury e-commerce boutique for exquisite sarees and traditional jewellery featuring product filtering, cart drawer, and seamless checkout experience.",
    image: "/assets/images/projects/villageallure-cover.jpg",
    liveDemo: "https://villageallure.com/",
    github: "https://github.com/SUNAND2003",
    tags: ["E-Commerce", "Shopping Cart", "UI/UX", "Product Catalog"],
    featured: true
  },
  {
    id: 4,
    title: "Royal Falcon Group",
    category: "ecommerce",
    categoryLabel: "E-Commerce / Enterprise",
    description: "Corporate e-commerce platform for Royal Falcon Group showcasing wholesale and retail product collections with inquiry handling and clean navigation.",
    image: "/assets/images/projects/royalfalcon-cover.jpg",
    liveDemo: "https://royalfalcongroup.com/",
    github: "https://github.com/SUNAND2003",
    tags: ["Corporate", "E-Commerce", "Product Showcase", "B2B/B2C"],
    featured: true
  },
  {
    id: 5,
    title: "Qroots International",
    category: "webapp",
    categoryLabel: "Educational / Consulting",
    description: "An educational consulting portal for medical aspirants with course listings, consultant bookings, and career guidance resources.",
    image: "/assets/images/projects/qroots-cover.jpg",
    liveDemo: "https://www.qrootsinternational.com/",
    github: "https://github.com/SUNAND2003",
    tags: ["Consulting", "Lead Generation", "Responsive Design", "Modern UI"],
    featured: true
  },
  {
    id: 6,
    title: "Middleeast Mariner",
    category: "mern",
    categoryLabel: "Industrial / Marine",
    description: "A specialized marine equipment platform selling marine spare parts and industrial machinery products with comprehensive cataloging.",
    image: "/assets/images/projects/mariner-cover.jpg",
    liveDemo: "https://middleeastmariner.com/public/",
    github: "https://github.com/SUNAND2003",
    tags: ["Marine Industry", "Parts Catalog", "Fast Loading", "Client Portal"],
    featured: true
  },
  {
    id: 7,
    title: "Tricore Fitness Club",
    category: "webapp",
    categoryLabel: "Fitness & Lifestyle",
    description: "A high-energy gym and fitness club web application built with responsive Bootstrap design, interactive class schedules, and membership tiers.",
    image: "/assets/images/projects/tricore-cover.jpg",
    liveDemo: "https://sunand2003.github.io/Tricore-Fitness-club/",
    github: "https://github.com/SUNAND2003",
    tags: ["Gym & Fitness", "Interactive UI", "Membership Plans", "Animations"],
    featured: true
  }
];

export const services = [
  {
    id: "01",
    title: "MERN Stack Development",
    icon: "ri-stack-line",
    category: "Full Stack",
    short: "Modern, dynamic web apps with MongoDB, Express, React, and Node.js.",
    description: "End-to-end full stack web application development. From database modeling with MongoDB, secure RESTful APIs with Node.js & Express, to ultra-responsive frontends with React.js.",
    colClass: "col-lg-7 col-md-12",
    features: ["Custom Web Applications", "RESTful API Architecture", "Database Modeling & Optimization", "State Management & Redux"]
  },
  {
    id: "02",
    title: "Deployment & Cloud Hosting",
    icon: "ri-cloud-line",
    category: "DevOps & Cloud",
    short: "Deploying and scaling applications on modern cloud infrastructure.",
    description: "Reliable CI/CD pipelines, SSL configuration, domain setup, and cloud hosting on Vercel, Netlify, Render, and AWS ensuring 99.9% uptime and lightning speed.",
    colClass: "col-lg-5 col-md-12",
    features: ["Vercel & Netlify Deployment", "AWS / VPS Configuration", "Custom Domains & SSL", "Performance & Caching"]
  },
  {
    id: "03",
    title: "UI/UX & Frontend Design",
    icon: "ri-palette-line",
    category: "Interface Design",
    short: "Intuitive, aesthetic, user-centered digital interfaces.",
    description: "Transforming design mockups into pixel-perfect, accessible, and responsive user interfaces with smooth micro-interactions and high conversion rates.",
    colClass: "col-lg-5 col-md-12",
    features: ["Mobile-First Responsive Layouts", "Modern CSS & Tailwind CSS", "Micro-Animations & Transitions", "Figma to React Conversion"]
  },
  {
    id: "04",
    title: "Full Stack Maintenance & SEO",
    icon: "ri-shield-check-line",
    category: "Performance & SEO",
    short: "Keeping your web platforms secure, fast, and search engine friendly.",
    description: "Code auditing, performance tuning, bug fixing, technical SEO optimization, and ongoing feature updates for existing and new platforms.",
    colClass: "col-lg-7 col-md-12",
    features: ["Speed Optimization", "Technical SEO & Meta Tags", "Security & Auth Audits", "Continuous Maintenance"]
  }
];
