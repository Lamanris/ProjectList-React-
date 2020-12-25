import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import projectsData from './projectsData'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    projectsData
  })

export default createRootReducer
