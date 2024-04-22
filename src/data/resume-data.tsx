import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andre Pratama",
  initials: "AP",
  location: "Medan, Indonesia",
  locationLink: "https://www.google.com/maps/place/Medan",
  about: "Senior Frontend Engineer",
  summary:
    `Experienced Frontend Engineer with 6 years of expertise in JavaScript, specializing in React & Next.js.
Demonstrated success in driving revenue growth and delivering high-quality products. Proficient in
leading small frontend teams, fostering collaboration, and prioritizing professional development. Known
for strong communication skills and a team-oriented approach. Eager to continually learn and adapt to
new tools and technologies in web development.`,
  avatarUrl: "https://media.licdn.com/dms/image/C5103AQFJP1k6HF0hPw/profile-displayphoto-shrink_400_400/0/1575032726714?e=1719446400&v=beta&t=_jVjSuzKdIuF8RbVBX7lmqs3sfRrr9JXL2lEpCi8wdU",
  personalWebsiteUrl: "https://andrepratama.dev",
  contact: {
    email: "andreepratama27@gmail.com",
    tel: "+6285156847850",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/andreepratama27",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andre-pratama27/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/andreepratamaa",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "STMIK Mikroskil",
      degree: "Bachelor's Degree in Informatics engineering. GPA: 3,41",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Primaku",
      link: "https://primaku.com",
      badges: ["Remote"],
      title: "Senior Frontend Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "Now",
      description:
        `Leading Frontend Team on user facing product, initiate sprint-grooming for web team, take a technical decision for tools & technolgy that implemented on the project. Technologies: React,
        Next JS, Typescript, Tailwind CSS`,
    },
    {
      company: "Stockbit",
      link: "https://stockbit.com",
      badges: ["Remote"],
      title: "Senior Frontend Engineer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
      `Created, Developed and maintain Stockbit Malaysia Platform, contribute to improve Ebook performance on Stockbit Platform, contribute to growth company revenue by implementing Paywall Feature. Technologies:
      React, Next JS, Typescript, Styled-Components, Cypress
      `
    },
    {
      company: "Accelbyte, Inc",
      link: "https://accelbyte.io",
      badges: ["Onsite (Yogyakarta, Indonesia)"],
      title: "Frontend Engineer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2022",
      description:
        `Collaborating with Backend Engineer, QA and Product Owner to develop and
maintain Armada, a game server web based app for multiplayer game purpose, acting as a lead frontend, take initiative and decision about tools & library that used on the project. Technologies: React, Typescript, CSS Modules, Docusaurus`,
    },
    {
      company: "Pomona",
      link: "https://pomona.id",
      badges: ["Onsite (Jakarta, Indonesia)"],
      title: "Frontend Engineer",
      logo: NSNLogo,
      start: "2019",
      end: "2020",
      description: `Join on B2B team to create Verifier Dashboard, develop & maintain PWA Web App, develop & maintain campaign mobile app for custom order. Technologies: React, React Native, GraphQL, Typescript`,
    },
    {
      company: "TrackerHero",
      link: "https://trackerhero.com",
      badges: ["Onsite - Cyberjaya, Selangor (Malaysia)"],
      title: "Mobile Engineer (React Native)",
      logo: NSNLogo,
      start: "2017",
      end: "2019",
      description: `Initiate, Create & Develop Tracking Patrol App with custom devices, implement & maintain native-modules for custom mobile apps, provide testing & training with operation teams. Technologies:
      React Native, Typescript, Redux Thunk, Redux Saga, Material UI`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "React Native",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "Stockbit Malaysia Platform",
      techStack: [
        "Next.js",
        "TypeScript",
        "Styled Components",
        "Cypress",
      ],
      description: "A Social Media for Stock Information build for Malaysia Users",
      logo: ConsultlyLogo,
      link: {
        label: "stockbit.my",
        href: "https://stockbit.my",
      },
    },
    {
      title: "Primaku Website",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "PWA"
      ],
      description: "A Primaku Website",
      logo: ConsultlyLogo,
      link: {
        label: "primaku-web",
        href: "primaku.com",
      },
    },
    {
title: "Primaku Parenthood Institute 2023",
       techStack: [
         "Next.js",
       "TypeScript",
       "Tailwind CSS",
       "Zustand",
       ],
       description: "An Education Platform for Baby & Child Growth",
       logo: ConsultlyLogo,
       link: {
label: "primaku-parenthood",
       href: "app-parenthood.primaku.com",
       },
    } 
  ],
} as const;
