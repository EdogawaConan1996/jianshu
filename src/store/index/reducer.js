import { fromJS } from "immutable";
import {SET_ARTICLE_LIST, SET_AUTHOR_LIST} from "./action.type";


const defaultState = fromJS({
  articleList: [],
  authorList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ARTICLE_LIST: return state.set('articleList', action.value);
    case SET_AUTHOR_LIST: return state.set('authorList', action.value)
    default: return state;
  }
}
