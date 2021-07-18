import Head from 'next/head'

function Layout({children, title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto max-w-6xl py-20 px-12 lg:px-24 mb-12">
        {children}
      </div>
    </>
  )
}

export default Layout