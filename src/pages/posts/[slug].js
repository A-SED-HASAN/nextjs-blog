import Head from 'next/head'
import { PostContent } from '../../components'
import { getPostData, getPostsFiles } from '../../functions'

export default function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}
export async function getStaticPaths() {
  const postFileNames = getPostsFiles()
  const slug = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''))
  return {
    paths: slug.map((slug) => ({ params: { slug: slug } })),
    fallback: false,

    //this scenario for 2k of post
    //not pre generating any of them
    // paths: [],
    // fallback: true,
  }
}
