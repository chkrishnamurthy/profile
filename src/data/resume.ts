import type { ResumeData } from "@/types/resume";

export const resume: ResumeData = {
  name: "CH Krishna Murthy",
  role: "Senior Full Stack Developer",
  tagline: "Say Hi to the full-stack side of my brain.",
  about:
    "Full Stack Developer with 6.5+ years of experience building scalable web applications. Strong expertise in React.js, TypeScript, Node.js, Prisma, and GraphQL, with hands-on experience delivering production-ready features that improve user experience and business efficiency. Skilled in designing complete systems from frontend to backend and database.",
  email: "chalapatikrishnamurthy@gmail.com",
  phone: "+91 7396678358",
  location: "Hyderabad, India",
  socials: [
    { label: "Email", href: "mailto:chalapatikrishnamurthy@gmail.com" },
    { label: "GitHub", href: "https://github.com/chkrishnamurthy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/krishna-murthy-135980192/" },
    { label: "Resume", href: "/resume.pdf" },
  ],
  experience: [
    {
      company: "Mirabel Technologies India Pvt Ltd",
      period: "June 2022 — Present",
      roles: [
        {
          title: "Senior Full Stack Developer",
          period: "June 2024 — Present",
          bullets: [
            "Architected and delivered end-to-end CRM features using React.js, Node.js, Prisma, and GraphQL — improving scalability and maintainability.",
            "Integrated AI-assisted development tools (GitHub Copilot, Cursor, Claude, ChatGPT) to accelerate coding, debugging, and feature delivery.",
            "Leveraged AI tools for code generation, refactoring, and rapid prototyping — reducing development time.",
            "Designed reusable frontend components and backend services, ensuring consistency across the platform.",
            "Collaborated with cross-functional teams to translate business requirements into high-impact technical solutions.",
            "Enhanced UI/UX using Tailwind CSS for improved usability and engagement.",
          ],
        },
        {
          title: "Full Stack Developer",
          period: "June 2022 — June 2024",
          bullets: [
            "Developed and enhanced CRM (Magazine Manager) product features contributing to product growth and user adoption.",
            "Built scalable frontend interfaces and integrated them with backend APIs and database layers.",
            "Utilized AI tools to assist in debugging, learning new technologies, and improving code quality.",
            "Created shared component libraries, reducing redundancy and improving development speed.",
          ],
        },
      ],
    },
    {
      company: "Accenture Solutions Limited",
      period: "Oct 2019 — June 2022",
      roles: [
        {
          title: "Software Developer Associate",
          period: "Oct 2019 — June 2022",
          bullets: [
            "Developed and maintained multiple Chrome extensions and web applications, improving team productivity and workflow efficiency.",
            "Analyzed and identified malicious browser extensions, flagging threats such as malicious scripts and data risks.",
            "Improved internal tools and debugging processes.",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    },
    {
      label: "Database & ORM",
      items: ["Prisma", "PostgreSQL", "MongoDB", "Neon"],
    },
    {
      label: "AI & Developer Tools",
      items: ["GitHub Copilot", "Cursor", "Claude", "ChatGPT", "AI-assisted debugging"],
    },
    {
      label: "Core Strengths",
      items: ["Full Stack Development", "API Design", "Debugging", "Git", "JIRA"],
    },
  ],
  education: [
    {
      degree: "M.Sc — Computer Science",
      institution: "Haindavi Degree & PG College, Hyderabad",
      year: "2021",
    },
    {
      degree: "B.Sc",
      institution: "AV College, Hyderabad",
      year: "2016",
    },
  ],
  projects: [
    {
      name: "CRM Modules — Magazine Manager",
      description:
        "End-to-end CRM features built with React, Node, Prisma and GraphQL — covering UI, APIs and database layers.",
      stack: ["React", "Node.js", "Prisma", "GraphQL", "Tailwind"],
    },
    {
      name: "Chrome Extensions Suite",
      description:
        "Multiple Chrome extensions and internal web apps to improve workflow efficiency and detect malicious scripts.",
      stack: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
    },
    {
      name: "Invoice Generation App",
      description:
        "Side project for generating, previewing and exporting invoices with a clean, printable layout.",
      stack: ["React", "TypeScript", "Tailwind"],
    },
  ],
  interests: ["Reading", "Exploring new technologies", "Chess"],
};
