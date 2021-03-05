import Head from 'next/head'

const Layout = ({pageTitle, children})  => {
  return (
    <div className="layout">
      <Head>
        <title>Educator | {pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}     
     </main>
    </div>
  )
}

export default Layout;
