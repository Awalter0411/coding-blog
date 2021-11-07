import BlogList from '../Blog/BlogList/BlogList'
import useFetch from '../../hooks/useFetch'

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('/blogs')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'所有文章'} />}
    </div>
  )
}

export default Home
