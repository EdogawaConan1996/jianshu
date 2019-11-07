import { fromJS } from "immutable";
import { SET_ARTICLE_LIST } from "./action.type";

const defaultState = fromJS({
  articleList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ARTICLE_LIST: return state.set('articleList', action.value);
    default: return state;
  }
}