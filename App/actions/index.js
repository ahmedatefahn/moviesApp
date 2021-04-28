import axios from "axios";
import { baseUrl, apiKey } from '../utils/constants'
import { loading, success, fail, reset } from '../utils/actionTypes'
import Toast from 'react-native-simple-toast';
import { InserIntoDb, SelectFromDb } from '../utils/DB'

export const getData = ({ page, refresh = false }) => {
  let url = baseUrl + `person/popular?api_key=${apiKey}&language=en-US&page=${page}`
  return async dispatch => {
    if (refresh)
      dispatch(refreshList())

    try {
      dispatch(loadingStart())

      let result = await axios.get(url)
      console.log(result)
      if (result.status == 200) {
        dispatch(dataSuccess(result?.data?.results))
        //insert to local db
        let fetched = result?.data?.results
        for (let i = 0; i < fetched.length; i++) {
          let DATA = fetched[i]
          let DataToINsert = [DATA.id, DATA.name, DATA.known_for_department, DATA.popularity, DATA.profile_path]
          let InsertInopopularSqlResult;
          console.log(DataToINsert)
          let getPopularsFromSql = []
          getPopularsFromSql = await SelectFromDb(`select * from popular where pop_id=${DATA.id} `)
          console.log({ ssss: getPopularsFromSql })
          if (getPopularsFromSql.length == 0) {
            InsertInopopularSqlResult = await InserIntoDb('INSERT Into popular (pop_id,name,known_for_department,popularity,profile_path) VALUES (?,?,?,?,?)', DataToINsert)
            console.log("InsertInopopularSqlResult", InsertInopopularSqlResult)
            if (InsertInopopularSqlResult == 'Success') {
              responseArray.push({ 'key': 'success', 'value': 'success' })
            }
          }
        }
      }
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
const refreshList = () => (
  {
    type: reset,
  }
)