const DATA = {
  name: "Abdullah Almoheb",
  shortName: "AM",
  roles: [
    "Full-Stack Developer",
    "ASP.NET Core Developer",
    "C# Developer",
    "Front-End Developer",
  ],
  heroIntro:
    "I build secure and scalable Web APIs using C#, ASP.NET Core and SQL Server — and connect them to clean, responsive interfaces built with HTML, CSS & JavaScript.",
  avatar: "images/Me2.jpeg",
  cvLink: "Abdullah_Almoheb_Full_Stack_Developer_CV%20(1).pdf",

  about: {
    title: "From database to browser — I build the whole thing",
    paragraphs: [
      "I'm a Full-Stack Developer with a Bachelor's degree in Computer Science, building web applications and RESTful APIs with C#, ASP.NET Core and SQL Server, and front-end interfaces with HTML, CSS and JavaScript.",
      "I'm currently working as a Full-Stack Developer Intern at Maretis Technology, developing web application features and RESTful APIs with ASP.NET Core Web API. My team graduation project, Wazifni — a job recruitment platform with Google Gemini AI CV analysis — was recognized as one of the best graduation projects and awarded a Certificate of Honor.",
      "I have a strong foundation in OOP, data structures, 3-tier architecture and Git-based collaboration, with solid analytical, problem-solving and teamwork skills.",
    ],
    info: [
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Location", value: "Syria" },
      { label: "Email", value: "abdullahalmooheb@gmail.com" },
      { label: "Degree", value: "B.Sc. Computer Science" },
      { label: "Languages", value: "Arabic, English" },
    ],
    stats: [
      { number: 5, suffix: "+", label: "Projects Built" },
      { number: 22, suffix: "", label: "Courses Completed" },
      { number: 10, suffix: "+", label: "Technologies Used" },
      { number: 45, suffix: "+", label: "Happy Clients" },
    ],
  },

  skills: [
    {
      category: "Back-End",
      items: [
        { name: "C#", level: 90 },
        { name: ".NET Framework / WinForms", level: 90 },
        { name: "RESTful APIs & CRUD", level: 85 },
        { name: "ASP.NET Core Web API", level: 90 },
        { name: "JWT Authentication", level: 95 },
      ],
    },
    {
      category: "Front-End",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      category: "Database & Practices",
      items: [
        { name: "OOP & Data Structures", level: 90 },
        { name: "3-Tier Architecture", level: 90 },
        { name: "SQL Server / Stored Procedures", level: 85 },
        { name: "ADO.NET", level: 90 },
        { name: "Git & GitHub", level: 95 },
      ],
    },
  ],

  projects: [
    {
      title: "Wazifni — Job Recruitment Platform",
      category: "Graduation Project 🏆",
      description: "Award-winning team graduation project (Certificate of Honor). A full-stack job recruitment website where I built the front end and integrated Google Gemini AI to analyze uploaded CVs and recommend suitable jobs — plus job listings, applications, filtering and user profiles.",
      image: "images/wazifni.svg",
      tags: ["HTML", "CSS", "JavaScript", "Gemini AI", "Team Project"],
      live: "",
      code: "https://github.com/abode-moheb",
    },
    {
      title: "DVLD — Driving License Management",
      category: "Desktop App",
      description: "A comprehensive system for issuing, renewing, suspending and tracking driving licenses, with role-based user management, automated test scheduling, international licenses and a full audit trail — built on a 3-tier architecture.",
      image: "images/dvld.svg",
      tags: ["C#", ".NET", "WinForms", "SQL Server", "3-Tier"],
      live: "",
      code: "https://github.com/abode-moheb",
    },
    {
      title: "Store Management System",
      category: "Desktop App",
      description: "A point-of-sale application for a family retail store with barcode scanner integration, real-time pricing, inventory management, sales tracking, invoice printing and reports.",
      image: "images/store.svg",
      tags: ["C#", "WinForms", "SQL Server", "Barcode"],
      live: "",
      code: "https://github.com/abode-moheb",
    },
    {
      title: "Students Management API",
      category: "Web API",
      description: "A RESTful API for managing student records with full CRUD operations, JWT-secured endpoints and proper HTTP request/response handling following REST principles.",
      image: "images/students-api.svg",
      tags: ["ASP.NET Core", "Web API", "SQL Server", "JWT"],
      live: "",
      code: "https://github.com/abode-moheb",
    },
  ],

  services: [
    { icon: "⚙️", title: "RESTful Web APIs", description: "Secure, well-structured APIs with ASP.NET Core and SQL Server, ready for web and mobile clients." },
    { icon: "🧩", title: "Full-Stack Web Applications", description: "Complete web systems from database design to a responsive HTML, CSS & JavaScript front-end." },
    { icon: "🖥️", title: "Desktop Business Systems", description: "Management and POS systems with C# WinForms — inventory, sales, invoices and reports." },
    { icon: "🔐", title: "Authentication & Access Control", description: "JWT-secured endpoints, user management and role-based permissions." },
    { icon: "🗄️", title: "Database Design", description: "Well-structured SQL Server databases with stored procedures, reporting and ADO.NET data access." },
    { icon: "🤖", title: "AI Integration", description: "Smart features powered by AI APIs like Google Gemini — e.g. CV analysis and recommendations." },
  ],

  contact: {
    text: "Need an API, a web app or a management system? Let's talk about your project — I'll get back to you as soon as possible.",
    email: "abdullahalmooheb@gmail.com",
    phone: "+963931823392",
    location: "Syria",
    socials: [
      { name: "GitHub", url: "https://github.com/abode-moheb" },
      { name: "LinkedIn", url: "https://linkedin.com/in/abdullah-al-moheb-045015238" },
    ],
  },
};
