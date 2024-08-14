/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Roux Lab`,
    description: `Benoît Roux's research group at the University of Chicago.`,
    author: `@kghaby`,
    siteUrl: `https://kghaby.github.io/roux-lab/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roux Lab`,
        short_name: `RL`,
        start_url: `/`,
        background_color: `#8b7e7e`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#760000`,
        display: `minimal-ui`,
        icon: `src/images/protR_whitecircle.png`, // This path is relative to the root of the site.
      },
    },
  ],
  pathPrefix: "/roux-lab",
}
