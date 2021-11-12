import { useEffect, useState } from 'react'
import request from '../../request/request'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
const About = () => {
  const [desc, setDesc] = useState('')
  useEffect(() => {
    request
      .get(
        '/users/userInfo/' +
          JSON.parse(localStorage.getItem('coding-blog')).username
      )
      .then(res => {
        console.log(res.data)
        setDesc(res.data.desc)
      })
  })
  return <div>
            <ReactMarkdown
              children={desc}
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
}

export default About
