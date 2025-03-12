import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import React from 'react';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import './hidesearch.css';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    projectLink="https://github.com/openinternetprotocol"
    projectIcon={<IconBrandGithub height="24" />}
    chatLink="https://x.com/useopeninternet"
    chatIcon={<IconBrandX height="24" />}
    logo={
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#FFF" fill="none" viewBox="0 0 420 420">
          <path strokeWidth="26" d="M209,15a195,195 0 1,0 2,0z" />
          <path
            strokeWidth="18"
            d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"
          />
        </svg>{' '}
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>OIP</span>
      </>
    }
    // ... Your additional navbar options
  />
);

const footer = () => {
  return (
    <Footer
      style={{ background: 'black', display: 'flex', justifyContent: 'center', maxWidth: '100%', color: 'white' }}
    >
      MIT {new Date().getFullYear()} © The Open Internet Protocol, an open-source effort by&nbsp;
      <a href="https://portrait.so">Portrait</a>.
    </Footer>
  );
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();
  return (
    <html
      // style={{ backgroundColor: 'black' }}
      color="black"
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        faviconGlyph="🌐"
        color={{
          hue: 30,
          saturation: 25,
          lightness: {
            light: 90,
            dark: 90,
          },
        }}
        backgroundColor={{
          light: '#000000',
          dark: '#000000',
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          sidebar={{ toggleButton: false, defaultOpen: true, autoCollapse: false, defaultMenuCollapseLevel: 1 }}
          darkMode={false}
          nextThemes={{ forcedTheme: 'dark' }} // Force dark theme
          pageMap={pageMap}
          footer={footer()}
          docsRepositoryBase="https://github.com/openinternetprotocol/oip-website/tree/main/app/docs"
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
