/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const config = {
  title: "BlackRiver notes",
  description:
    "Welcome to my digital garden where I share my knowledge with the world!",
  author: "Arjen Stens",
  logo: "/images/logo.svg",
  domain: "https://notes.arjenstens.com",
  // links to the pages you want to link to in the navbar and in the footer
  navLinks: [{ href: "/blog/arjenstens.com", name: "Blog ArjenStens" }],
  navLinks: [
    { href: "/blog/blackrivertech.nl", name: "Blog BlackriverTech.nl" },
  ],
};

export default config;
