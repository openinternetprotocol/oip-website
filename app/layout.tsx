import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import React from 'react'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Open Internet Protocol</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Open Internet Protocol, a protocol by Portrait Technology Inc.</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head faviconGlyph="✨"/>
      <body>
        <Layout
          navbar={navbar}
          sidebar={{autoCollapse: false, defaultOpen: false}}
          pageMap={pageMap}
          editLink={null}
          feedback={{content: null}}
          footer={footer}
          navigation={false}
          toc={{float: false}}
          
            // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}