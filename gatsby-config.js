/**
* @type {import('gatsby').GatsbyConfig}
*/
module.exports = {
  siteMetadata: {
    title: "Yevgeniy Tyan Blog",
    description: "Гайды по программированию на JavaScript и Python. Образовательные статьи и ссылки.",
    siteUrl: `https://www.ytvee.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
