import Head from 'next/head'
import { ContactForm } from '../components'
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>contact hiiiiiiiiiiiiii me!</title>
        <meta name='description' content='send me your messages' />
      </Head>
      <ContactForm />
    </>
  )
}
