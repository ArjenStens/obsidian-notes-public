/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const config = {
  title: "BlackRiver - Digital Garden",
  description:
    "Welcome to my digital garden where I share my knowledge with the world!",
  author: "Arjen Stens",
  logo: "/images/logo.png",
  domain: "https://notes.arjenstens.com",

  // Navigation
  navLinks: [{ href: "/blog/arjenstens.com", name: "Blog ArjenStens" }],
  navLinks: [
    { href: "/blog/blackrivertech.nl", name: "Blog BlackriverTech.nl" },
  ],

  // Encourage contributing
  showEditLink: true,
  editLinkRoot: "https://github.com/ArjenStens/obsidian-notes-public",
};

export default config;
