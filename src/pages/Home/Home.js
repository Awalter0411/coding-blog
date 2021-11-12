import BlogList from '../Blog/BlogList/BlogList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../request/request'

const Home = () => {
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [blogs, setBlogs] = useState([])
  const [isIndex, setIsIndex] = useState(false)
  const params = useParams()
  // 判断当前是否是首页
  if (!isIndex) {
    setIsIndex(isIndex => !isIndex)
  }
  useEffect(() => {
    setIsPending(true)
    if (Object.getOwnPropertyNames(params).length === 0) {
      request.get('/articles/list/' + 'admin').then(res => {
        setBlogs(res.data.reverse().slice(0, 10))
        setTitle('最新文章')
        setIsPending(false)
        setIsIndex(true)
      })
    } else {
      request.get('/articles/listByCate/' + params.id).then(res => {
        console.log(res.data)
        setBlogs(res.data.articleList)
        setTitle(res.data.categoryName)
        setIsPending(false)
        setIsIndex(false)
      })
    }
  }, [isIndex])
  return (
    <div className='home'>
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  )
}

export default Home
