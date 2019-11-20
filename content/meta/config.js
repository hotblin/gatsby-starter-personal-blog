const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "个人博客 - 大智若鳄鱼", // <title>
  shortSiteTitle: "大智若鳄鱼的博客", // <title> ending for posts and pages
  siteDescription: "大智若鳄鱼-siteDescription",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "大智若鳄鱼",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "PersonalBlog",
  infoTitleNote: "大智若鳄鱼",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/hotblin" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "https://facebook.com/greglobinski" }
  ]
};
