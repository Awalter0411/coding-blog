import { useParams } from 'react-router'
import useFetch from './useFetch'
import { useHistory } from 'react-router'

const BlogDetail = () => {
  const { id } = useParams()
  const {
    data: blog,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id)
  const history = useHistory()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div className='blog-details'>
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <div>{blog.author}</div>
          {/* <article>{blog.body}</article> */}
          {/* 解析html标签 */}
          <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}
    </div>
  )
}

export default BlogDetail
