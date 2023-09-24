import Head from 'next/head'
import { Hero, FeaturedPosts } from '../components'
import { getFeaturedPosts } from '../functions'

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>hasan blog</title>
        <meta
          name='description'
          content='i post about programming and web dev'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
