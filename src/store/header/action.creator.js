import { CHANGE_INPUT_FOCUS, SET_SEARCH_INFO_LIST, SET_TOTAL_PAGE, SET_CURRENT_PAGE } from "./action.type"
import { getHeaderList } from "../../api/data"

export const changeInputFocusAction = () => {
  return {
    type: CHANGE_INPUT_FOCUS
  }
}

export const getSearchInfoListAction = () => {
  return (dispatch) => {
    getHeaderList().then(resp => {
      let action
      const list = resp.data.data
      const totalPage = list.length % 10 === 0 ? list.length / 10 : Math.ceil(list.length / 10)
      action = setSearchInfoListAction(list)
      dispatch(action)
      action = setTotalPageAction(totalPage)
      dispatch(action)
    }).catch(err => {
      console.log(err)
    })
  }
}

const setSearchInfoListAction = (value) => {
  return {
    type: SET_SEARCH_INFO_LIST,
    value
  }
}

const setTotalPageAction = (value) => {
  return {
    type: SET_TOTAL_PAGE,
    value
  }
}

export const setCurrentPageAction = (value) => {
  return {
    type: SET_CURRENT_PAGE,
    value
  }
}