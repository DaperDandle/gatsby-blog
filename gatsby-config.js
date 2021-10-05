module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsbytest61632.gatsbyjs.io/`,
    title: "Gatsby Test",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
