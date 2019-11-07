import axios from 'axios'

axios.defaults.baseURL = 'https://bcfe70be-2333-4efb-8b58-5e976821c0ac.mock.pstmn.io/api'
axios.defaults.timeout = 30000

export const getHeaderList = () => {
  return axios.request({
    method: 'GET',
    url: 'headerList'
  })
}

export const getArticleList = () => {
  return axios.request({
    method: 'GET',
    url: 'recommendAuthor'
  })
}