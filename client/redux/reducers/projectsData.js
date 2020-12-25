const initialState = {
  addProjectsPopup: false,
  projectsViewType: 'catalog',
  projectInfo: [
    {
      title: 'Терапевтический корпус',
      admin: 'Денис Конев',
      supervisor: 'Гросолим Лимитед',
      start_date: '08.04.2019',
      end_date: '31.01.2021',
      image: 'https://abform.uz/wp-content/uploads/2019/12/post1.jpg'
    }
  ]
}
const ADD_PROJECTS_POPUP = 'ADD_PROJECTS_POPUP'
const PROJECT_INFO = 'PROJECT_INFO'
const CHANGE_PROJECTS_VIEW_TYPE = 'CHANGE_PROJECTS_VIEW_TYPE'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECTS_POPUP:
      return { ...state, addProjectsPopup: action.addProjectsPopup }
    case CHANGE_PROJECTS_VIEW_TYPE:
      return { ...state, projectsViewType: action.projectsViewType }
    case PROJECT_INFO:
      return { ...state, projectInfo: [...state.projectInfo, action.projectInfo] }
    default:
      return state
  }
}
