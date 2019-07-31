module.exports = ({
  contentPath = "data",
  basePath = "docs",
  sidebarPath = "sidebar.json",
}) => ({
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,

    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto"],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: sidebarPath,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
        name: "docs",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
  ],
})
