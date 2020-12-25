import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import '../assets/scss/modal.scss'

const AddProjectPopup = () => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    image: 'https://abform.uz/wp-content/uploads/2019/12/post1.jpg'
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputValues({ ...inputValues, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({ type: 'PROJECT_INFO', projectInfo: inputValues })
    dispatch({ type: 'ADD_PROJECTS_POPUP', addProjectsPopup: false })
  }

  const getBase64 = useCallback((file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        res(reader.result)
      }
      reader.onerror = (err) => {
        rej(err)
      }
    })
  }, [])

  const handleImageChange = async (event) => {
    const b64 = await getBase64(event.target.files[0])
    setInputValues({ ...inputValues, image: b64 })
  }

  return (
    <div className="addProjectPopup__wrapper">
      <div className="addProjectPopup__body">
        <div className="addProjectPopup__content">
          <button
            type="button"
            className="addProjectPopup__closeBtn text-3xl focus:outline-none"
            onClick={() => {
              dispatch({ type: 'ADD_PROJECTS_POPUP', addProjectsPopup: false })
            }}
          >
            X
          </button>
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
            className="flex flex-col"
          >
            <label htmlFor="projectName" className="mb-2 text-sm">
              Название проекта:
            </label>
            <input
              required
              type="text"
              id="projectName"
              placeholder="Название"
              className=" border border-grey-700 outline-none py-2 px-3 mb-4"
              name="title"
              onChange={(e) => {
                handleInputChange(e)
              }}
            />
            <label htmlFor="projectTime" className="mb-2 text-sm">
              Продолжительность проекта:
            </label>
            <div id="projectTime" className="mb-4">
              <input
                type="date"
                className="border border-grey-700 outline-none py-2 px-3"
                name="start_date"
                onChange={(e) => {
                  handleInputChange(e)
                }}
              />
              ---
              <input
                type="date"
                className="border border-grey-700 outline-none py-2 px-3"
                name="end_date"
                onChange={(e) => {
                  handleInputChange(e)
                }}
              />
            </div>
            <label htmlFor="projectHead" className="mb-2 text-sm">
              Руководитель проекта:
            </label>
            <input
              required
              type="text"
              id="projectHead"
              placeholder="ФИО"
              className=" border border-grey-700 outline-none py-2 px-3 mb-4"
              name="supervisor"
              onChange={(e) => {
                handleInputChange(e)
              }}
            />
            <label htmlFor="projectAdmin" className="mb-2 text-sm">
              Администратор проекта:
            </label>
            <input
              required
              type="text"
              id="projectAdmin"
              placeholder="ФИО"
              className=" border border-grey-700 outline-none py-2 px-3 mb-4"
              name="admin"
              onChange={(e) => {
                handleInputChange(e)
              }}
            />
            <label htmlFor="projectImg" className="mb-2 text-sm">
              Фото проекта:
            </label>
            <input
              type="file"
              id="projectImg"
              className="py-1 mb-4 outline-none cursor-pointer"
              name="image"
              onChange={(e) => {
                handleImageChange(e)
              }}
            />
            <button
              type="submit"
              className="bg-pink-600 px-8 py-3 text-white focus:outline-none hover:bg-pink-500 transition duration-500 ease-in-out"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProjectPopup
