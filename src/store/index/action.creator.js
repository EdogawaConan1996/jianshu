import { SET_ARTICLE_LIST } from "./action.type"
import { getArticleList } from '../../api/data'

export const setArticleListAction = (value) => {
  return {
    type: SET_ARTICLE_LIST,
    value
  }
}

export const getArticleListAction = () => {
  return (dispatch) => {
    let action
    getArticleList().then(resp => {
      const list = resp.data.data
      action = setArticleListAction(list)
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
  }
}