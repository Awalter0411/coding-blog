import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from '../../request/request'
import './Category.css'
const Category = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    request
      .get(
        '/categories/list/' +
         'admin' 
      )
      .then(res => {
        console.log(res.data)
        setCategories(res.data)
      })
  }, [])
  return <div className='category-container'>
    <ul>
      {categories.map(item => {
        return <li key={item.id}>
          <Link to={`/${item.id}`}>
            {item.name}
          </Link>
        </li>
      })}
    </ul>
  </div>
}

export default Category
