import Head from 'next/head'
import { AllPosts } from '../../components'
import { getAllPosts } from '../../functions'

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>all my posts</title>
        <meta
          name='description'
          content='a list of all programming related tutorials'
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}
