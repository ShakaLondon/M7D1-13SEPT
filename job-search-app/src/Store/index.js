import { createStore } from 'redux'
import mainReducer from '../Reducers/index.js'

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins

export const initialState = {
  favourites: {
    jobs: [],
  },
//   user: {
//     firstName: '',
//   },
}

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore