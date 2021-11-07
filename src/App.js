import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from './Create'
import BlogDetail from './BlogDetail'
import NotFound from './NotFound'
import About from './about'
import Talk from './Talk'
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/create' component={Create} /> */}
            <Route path='/about' component={About} />
            <Route path='/blogDetail/:id' component={BlogDetail} />
            <Route path='/talk' component={Talk} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
