import { PostsGrid } from '..'
import classes from './FeaturedPosts.module.css'

export default function FeaturedPosts({posts}) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}
