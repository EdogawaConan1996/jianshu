import {combineReducers} from 'redux-immutable'
import headerReducer from './header/reducer'
import indexReducer from './index/reducer'

export default combineReducers({
  header: headerReducer,
  index: indexReducer
})