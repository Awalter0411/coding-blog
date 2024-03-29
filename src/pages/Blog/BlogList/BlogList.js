import { Link } from 'react-router-dom'
import './BlogList.css'

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2 className='title'>{title}</h2>
      {blogs.map(blog => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogDetail/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
