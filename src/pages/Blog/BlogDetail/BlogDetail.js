import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../../request/request'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import './BlogDetail.css'

const BlogDetail = () => {
  const { id } = useParams()
  const [isPending, setIsPending] = useState(false)
  const [blog, setBlog] = useState({})
  useEffect(() => {
    setIsPending(true)
    request
      .post('/articles/detail', {
        username: 'admin',
        id,
      })
      .then(res => {
        setBlog(res.data)
        setIsPending(false)
      })
  }, [])

  return (
    <div className='blog-details'>
      {isPending && <div>loading...</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <div>
            <ReactMarkdown
              children={blog.content}
              className={'code'}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={duotoneLight}
                      language={match[1]}
                      PreTag='div'
                      {...props}
                    />
                  ) : (
                    <code className='code' {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogDetail
