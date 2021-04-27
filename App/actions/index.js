import axios from "axios";
import { baseUrl, apiKey } from '../utils/constants'
import { loading, success, fail } from '../utils/actionTypes'

export const getData = ({ page, refresh = false }) => {
  let url = baseUrl + `person/popular?api_key=${apiKey}&language=en-US&page=${page}`
  return async dispatch => {
    try {
      dispatch(loadingStart())

      let result = await axios.get(url)
      console.log(result)
      if (result.status == 200)
        dispatch(dataSuccess(result?.data?.results))

      else
        dispatch(failRequest())
    }
    catch (e) {
      console.log(e.response)
      dispatch(failRequest())

    }
  }
}

const loadingStart = () => (
  {
    type: loading,
  }
)
const dataSuccess = value => (
  {
    type: success,
    payload: value,
  }
)
const failRequest = () => (
  {
    type: fail,
  }
)
