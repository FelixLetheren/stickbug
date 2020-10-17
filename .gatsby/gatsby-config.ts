import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteName: `Rocketmakers`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        codegen: true,
        // Don't move this inside src/, it'll cause a circular callback
        fileName: `types/graphql-types.ts`,
        documentPaths: ['src/**/*.tsx'],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};

export default config;
