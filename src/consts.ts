export const SITE_TITLE = "ted2xmen.dev";
export const SITE_DESCRIPTION = "portfolio";
export const GOOGLE_VERIFICATION_ID = "";
export const UMAMI_VERIFICATION_ID = "";
export const LIVE_URL = "https://ted2xmen.dev";

export const GITHUB_PROJECT_TAG = "ted2xmen"; // repository tag
export const GITHUB_USERNAME = "ted2xmen";

export const PROJECT_LENGTH = 5; // or undefined for all

export const POST_LENGTH = 10; // or undefined for all

export const SHOW_SOCIAL_ICONS = true;
export const SOCIAL_ICON_SIZE = 24;

export const MENU_ITEMS = [
  { name: "about", href: "/about" },
  { name: "blog", href: "/blog" },
  { name: "projects", href: "/projects" },
  { name: "rss", href: "/rss.xml" },
];

export const SOCIAL_LINKS = [
  // check out components/assets/icons
  { name: "linkedIn", href: "https://www.linkedin.com/in/tugrulerdemdogru/" },
  { name: "twitter", href: "https://twitter.com/ted2xmen" },
  { name: "github", href: "https://github.com/Ted2xmen" },
];

const SHORT_BIOGRAPHY =
  "I am a software developer who is curious and passionate about learning new technologies. I am motivated to be a part of a team where I can improve myself and to contribute, and learn from, other talented colleagues on complex and interesting projects.";

export const HOME_DATA = {
  name: "ted2xmen.dev",
  href: "/",
  quickLinks: [
    { name: "tech stack", href: "/stack" },
    { name: "tools", href: "/stack" },
    { name: "bookmarks", href: "/stack" },
  ],
  biography: SHORT_BIOGRAPHY,
  image:
    "https://pbs.twimg.com/profile_images/1321170490048786436/0EtFIqGA_400x400.jpg",
};

export const ABOUT_DATA = {
  biography: SHORT_BIOGRAPHY,
  reddits: [
    { name: "r/selfhosted", href: "https://www.reddit.com/r/selfhosted/" },
    { name: "r/NoteTaking", href: "https://www.reddit.com/r/NoteTaking/" },
  ],
  tools: [
    { name: "Visual Studio Code", category: "" },
    { name: "Google Chrome", category: "" },
    { name: "Github", category: "personal" },
    { name: "Gitlab", category: "work" },
    { name: "Microsoft Teams", category: "work" },
    { name: "raindrop.io", category: "personal" },
    { name: "ClickUp & Jira", category: "work" },
    { name: "Obsidian", category: "personal" },
    { name: "Microsoft To do", category: "personal" },
    { name: "Vercel", category: "personal" },
  ],
  stack: [
    "React",
    "Next.js",
    "Astro",
    "TailwindCSS",
    "Typescript",
    "Wordpress",
    "MaterialUI",
    "Ant Design",
    "Storybook",
    "Prisma",
    "Node.js",
    "Python",
  ],
};
