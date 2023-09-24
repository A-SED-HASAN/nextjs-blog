import Head from 'next/head'
import { Layout } from '../components'
import '../global/index.css'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel='shortcut icon' href='/fav.png' type='image/x-icon' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
