import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { HeaderQuery } from '../../types/graphql-types';

import './shell.scss';

const Shell: React.FunctionComponent = ({ children }) => {
  // Codegen will append 'query' onto any query name so just use the root word as below.
  // Write your gql query, save the file and your typings will be generated automatically.
  const data: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `);

  const siteName = data.site.siteMetadata.siteName;

  return (
    <>
      <Helmet defaultTitle="Am I locked down?">
        <meta name="description" content="A handy guide on covid restrictions in your area." />
        <meta property="og:title" content="Am I locked down?" />
        <meta property="og:image" content="https://www.amiinlockdown.co.uk/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <header>
        <div className="fixed-width">{siteName}</div>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Felix Letheren</footer>
    </>
  );
};

export default Shell;
