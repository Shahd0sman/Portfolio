// =====================================================================
//  ✏️  EDIT THIS FILE ONLY — every section reads its content from here
// =====================================================================

import logo from "../img/cover4.png";
import aboutphoto from "../img/about.jpg"
import projectimg from "../img/image.png"

const experienceYears = Math.max(1, new Date().getFullYear() - 2025);

// ---------- GENERAL (navbar + footer) ----------
export const profile = {
  name: "Shahd Osman",                         // TODO: your name
logo,                                        // small logo from src/img
  email: "shahdosman819@email.com",                    // TODO
  contactMessage: "Have an idea in mind? Let's make something great together, send me a message!",
  socials: [                                 // TODO: add / remove links
    { label: "GitHub", url: "https://github.com/Shahd0sman" },
    { label: "LinkedIn", url: "https://in/shahd-osman-2b2a79371" },
  ],
  resumeUrl: "/resume.pdf",                  // TODO: put your CV in /public
};

// ---------- 1. COVER ----------
export const cover = {
  greeting: "Hi, I'm",
  name: "shahd",                         // TODO
  role: "UIUX Designer · Fullstack Deverloper",        // TODO: e.g. UI/UX Designer · Frontend Developer
  tagline: "i help startups align their digital products with both user needs and business objectives by combining strategic UI/UX design with full-stack development to deliver practical, goaldriven web solutions.", // TODO
  note: "Currently building something cool...", // TODO: green status bubble
  stickyNote: "good things take time",       // TODO: small note on the left
  image: logo,                // TODO: your illustration/photo (transparent PNG looks best)
};

// ---------- 2. ABOUT ----------
export const about = {
  image:aboutphoto,                // TODO
  paragraphs: [                              // TODO: 1–3 short paragraphs
  "I turn “What if?” into “Here it is  ",
  "I'm a UI/UX Designer and FullStack Developer who believes technology should do more than just work it should make life easier",
"I enjoy exploring ideas, understanding people's needs, and turning complex problems into simple, intuitive digital experiences. By combining thoughtful design with functional development, I bring ideas to life as products that look good, feel right, and serve a real purpose",
"For me, great digital products aren't just about how they look or how they're built. They're about how they make people feel, what they help them achieve, and the difference they make",
"Good ideas deserve more than a screen. They deserve to come to life"
  ],
  facts: [                                   // TODO: quick facts (shown as little chips)
    { label: "Location", value: "Portsaid, Egypt" },
    { label: "Experience", value: `+${experienceYears} years` },
    { label: "Available for", value: "Freelance / Full-time" },
  ],
};

// ---------- 3. EDUCATION ----------
export const education = [
  {
    degree: "Bachelor in Computer Science",                   // TODO
    school: "Suez Canal University/ Computers & Information",      // TODO
    period: "2023 – 2027",                   // TODO
  },
  // TODO: copy the block above to add more
];

// ---------- 4. EXPERIENCE ----------
export const experience = [
  {
    role: "",                       // TODO
    company: "",                 // TODO
    period: "",            // TODO
    points: [                                // TODO: what you did
    ],
  },
  // TODO: copy the block above to add more
];

// ---------- 5. SKILLS ----------
// icon: emoji OR image URL/path
export const skills = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" },
];
export const skillsNote = "code · design · create"; // TODO: little bubble text

// ---------- 6. PROJECTS ----------
// Clicking a card opens `link` in a new tab.
export const projects = [
  {
    title: "فكرني",                   // TODO
    tag: "Full-Stack",                            // TODO: badge on the image (UI/UX, Fullstack, AI / ML...)
    description: "Organize Documents, Bills, and Reminders in One Place.", // TODO
    image: projectimg,  // TODO: screenshot
    tech: ["React", "Figma","Nodejs"],                // TODO: tech chips
    link: "https://fakkarni-two.vercel.app/",// TODO: ← card click goes here
  },
  // TODO: copy the block above to add more projects
];

// ---------- 7. SERVICES I OFFER ----------
export const services = [
  {
    icon: "search",
    title: "User Research & Problem Definition",                   // TODO
    description: "Understanding users' needs and identifying the problems a product should solve.", // TODO
  },
    {
    icon: "smartphone",
    title: "Responsive Website Development",                   // TODO
    description: "Turning designs into functional web pages that adapt to mobile, tablet, and desktop screens.", // TODO
  },
    {
    icon: "server",
    title: "Backend & API Development",                   // TODO
    description: "Building application logic, processing data, and connecting the frontend to the server.", // TODO
  },
    {
    icon: "shield-check",
    title: "Authentication & Authorization",                   // TODO
    description: "Implementing registration and login, verifying user identities, and controlling access to data and features.", // TODO
  },
  // TODO: copy to add more
];

// ---------- 8. FEEDBACKS ----------
export const feedbacks = [
  {
    name: "",                     // TODO
    role: "",                   // TODO
    avatar: "",  // TODO (optional — falls back to initial)
    text: "", // TODO
  },
  // TODO: copy to add more
];
