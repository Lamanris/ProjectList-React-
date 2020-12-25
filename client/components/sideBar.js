import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/sideBar.scss'

const SideBar = () => {
  return (
    <div className="flex h-full">
      <div className="bg-black px-4 h-full" />
      <div className="sideBar__menu w-full">
        <div className="flex flex-col mt-16 text-white text-xl">
          <Link to="#" className="focus:bg-gray-900 flex items-center py-2 pl-5">
            <img
              src="images/menuSvg.svg"
              width="18px"
              height="18px"
              alt=""
              className="sideBar__menuIcon mr-3"
            />
            Задачи и работы <span className="opacity-50 ml-2 block">3</span>
          </Link>
          <Link
            to="/projects"
            className="sideBar__menuItem active focus:bg-gray-900 flex items-center py-2 pl-5"
          >
            <img
              src="images/menuSvg.svg"
              width="18px"
              height="18px"
              alt=""
              className="sideBar__menuIcon mr-3"
            />
            Проекты
          </Link>
          <Link to="#" className="focus:bg-gray-900 flex items-center py-2 pl-5">
            <img
              src="images/menuSvg.svg"
              width="18px"
              height="18px"
              alt=""
              className="sideBar__menuIcon mr-3"
            />
            Календарь
          </Link>
          <Link to="#" className="focus:bg-gray-900 flex items-center py-2 pl-5">
            <img
              src="images/menuSvg.svg"
              width="18px"
              height="18px"
              alt=""
              className="sideBar__menuIcon mr-3"
            />
            Возможности
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
