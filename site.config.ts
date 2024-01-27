export const config = {
  siteMeta: {
    title: "Mackay's Hub",
    teamName: "John Mackay",
    description: "Mackay's posts curation site",
  },

  /**
   * @todo Add your site's domain here
   */
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    },
    {
      title: "GitHub",
      href: "https://github.com/catnose99/team-blog-hub",
    },
  ],
};
