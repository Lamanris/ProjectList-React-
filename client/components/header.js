import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-gray-200 p-3">
      <div className="flex justify-end">
        <Link to="/">
          <img alt="wave" src="images/wave.jpg" className="w-10 h-10 rounded-full inline-block" />
        </Link>
      </div>
    </div>
  )
}

export default Header
