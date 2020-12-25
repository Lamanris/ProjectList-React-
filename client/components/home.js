import React from 'react'
import { Route } from 'react-router-dom'

import Login from './login'
import Projects from './projects'

const Home = () => {
  return (
    <div>
      <Route exact path="/" component={() => <Login />} />
      <Route exact path="/projects" component={() => <Projects />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
