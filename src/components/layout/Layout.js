import { Container } from '@mui/material'
import { Header, Footer } from '../'
import { sections, links } from '../../assets/constants'

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth='lg'>
        <Header sections={sections} links={links} title='blog' />
        <main>{children}</main>
        <Footer
          title='Footer'
          description='Something here to give the footer a purpose!'
        />
      </Container>
    </>
  )
}
