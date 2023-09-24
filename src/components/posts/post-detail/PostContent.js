import ReactMarkdown from 'react-markdown'
import classes from './PostContent.module.css'
import { PostHeader } from '../../'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

export default function PostContent({ post: { slug, image, title, content } }) {
  const imagePath = `/images/posts/${slug}/${image}`

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { className, children } = code
      const language = className.split('-')[1]
      return (
        <SyntaxHighlighter
          language={language}
          children={children}
          style={atomDark}
        />
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  )
}
