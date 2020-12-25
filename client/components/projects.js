import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SideBar from './sideBar'
import Header from './header'
import ProjectsList from './projectsList'
import AddProjectPopup from './addProjectPopup'

const Projects = () => {
  const dispatch = useDispatch()
  return (
    <div className="h-full flex">
      <div className="sideBar w-1/2">
        <SideBar />
      </div>
      <div className="w-full">
        <Header />
        <div className="px-4">
          <h2 className="text-5xl text-purple-900 mt-5 uppercase mb-8">Проекты</h2>
          <div className="border-b">
            <button
              type="button"
              className="uppercase mr-2 px-2 border-b-2 pb-2 border-purple-900 focus:outline-none"
            >
              Список проектов
            </button>
            <button type="button" className="uppercase focus:outline-none opacity-25">
              Дорожные карты
            </button>
          </div>
          <div className="flex justify-between items-center mt-5 mb-10">
            <h4 className="uppercase text-2xl">Список проектов</h4>
            <div>
              <button
                type="button"
                className="bg-pink-600 px-8 py-3 text-white focus:outline-none hover:bg-pink-500 transition duration-500 ease-in-out"
                onClick={() => {
                  dispatch({ type: 'ADD_PROJECTS_POPUP', addProjectsPopup: true })
                }}
              >
                Добавить проект
              </button>
              {useSelector((s) => s.projectsData.addProjectsPopup) && <AddProjectPopup />}
              <div className="flex justify-end mt-3">
                <button
                  type="button"
                  className="w-6 h-6 focus:outline-none mr-4"
                  onClick={() => {
                    dispatch({ type: 'CHANGE_PROJECTS_VIEW_TYPE', projectsViewType: 'catalog' })
                  }}
                >
                  <img src="images/wave.jpg" alt="" />
                </button>
                <button
                  type="button"
                  className="w-6 h-6 focus:outline-none"
                  onClick={() => {
                    dispatch({ type: 'CHANGE_PROJECTS_VIEW_TYPE', projectsViewType: 'list' })
                  }}
                >
                  <img src="images/wave.jpg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <ProjectsList />
        </div>
      </div>
    </div>
  )
}

export default Projects
