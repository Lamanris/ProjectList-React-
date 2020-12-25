import React from 'react'
import { useSelector } from 'react-redux'

const ProjectsList = () => {
  const projectsList = useSelector((s) => s.projectsData.projectInfo)
  const projectViewType = useSelector((s) => s.projectsData.projectsViewType)
  return (
    <div>
      {projectViewType === 'catalog' ? (
        <div className="flex flex-wrap">
          {projectsList.map((project) => {
            return (
              <div key={project.title} className="projectList__card w-1/3 shadow-2xl mr-10 mb-10">
                <img className="projectList__img" src={project.image} alt="projectImg" />
                <div className="ml-4 pb-5">
                  <h4 className="mt-5 mb-2 uppercase">{project.title}</h4>
                  <div>
                    {project.start_date}-{project.end_date}
                  </div>
                  <p>{project.admin}</p>
                  <p>{project.supervisor}</p>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          {projectsList.map((project) => {
            return (
              <div key={project.title} className="mb-5 flex justify-between items-center">
                <h4 className="text-xl mr-10">{project.title}</h4>
                <div>
                  {project.start_date}-{project.end_date}
                </div>
                <p>{project.admin}</p>
                <p>{project.supervisor}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProjectsList
