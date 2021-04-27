import {StyleSheet,Dimensions} from 'react-native'
import { boldFont } from '../../utils/constants'
const {height,width} = Dimensions.get("window")
export const styles=StyleSheet.create({
  imageStyle:{
      width:width*.3,
      height:width*.3,
      alignSelf:'center',
      marginTop:20,
      borderRadius:width*.6,
      resizeMode:'cover'

  }  ,
  name:{
      fontFamily:boldFont,
      alignSelf:'center',
      fontSize:18
  }

})