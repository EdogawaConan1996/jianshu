import {SET_ARTICLE_LIST, SET_AUTHOR_LIST} from "./action.type"
import {getArticleList, getAuthorList} from '../../api/data'

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

export const setAuthorListAction = (value) => {
  return {
    type: SET_AUTHOR_LIST,
    value
  }
}

export const getAuthorListAction = () => {
  return (dispatch) => {
    let action
    getAuthorList().then(resp => {
      const list = resp.data.data
      action = setAuthorListAction(list)
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
  }
}
