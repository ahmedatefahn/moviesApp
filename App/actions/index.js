import axios from "axios";
import { baseUrl, apiKey } from '../utils/constants'
import { loading, success, fail,reset } from '../utils/actionTypes'
import Toast from 'react-native-simple-toast';

export const getData = ({ page, refresh = false }) => {
  let url = baseUrl + `person/popular?api_key=${apiKey}&language=en-US&page=${page}`
  return async dispatch => {
    if(refresh)
    dispatch(refreshList())

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
      Toast.show('connection error', Toast.SHORT);


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
const refreshList = () => (
  {
    type: reset,
  }
)