import { CHANGE_INPUT_FOCUS, SET_SEARCH_INFO_LIST, SET_TOTAL_PAGE, SET_CURRENT_PAGE } from "./action.type"
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  searchInfoList: [],
  totalPage: 0,
  currentPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_FOCUS: return state.set('focused', !state.get('focused'));
    case SET_SEARCH_INFO_LIST: return state.set('searchInfoList', action.value);
    case SET_TOTAL_PAGE: return state.set('totalPage', action.value);
    case SET_CURRENT_PAGE: return state.set('currentPage', action.value);    
    default: return state;
  }
}