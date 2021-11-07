import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">
        <h1>好好写代码~的博客</h1>
      </Link>
      <div className='links'>
        <Link to='/'>首页</Link>
        <Link to='/talk'>瞎逼逼</Link>
        <Link to='/about'>关于我</Link>
      </div>
    </nav>
  )
}

export default NavBar
