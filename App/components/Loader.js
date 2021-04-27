
import React from 'react'
import { StyleSheet } from 'react-native'
import { Spinner } from 'native-base'
import {colors} from '../utils/constants'

export default class Loader extends React.Component {

    render() {
        let { type, title, download, onpress } = this.props
        return (
            <Spinner 
            color={colors.gold} 
            style={style.Spinner} />

        )
    }
}
const style = StyleSheet.create({
   Spinner:{
     position: 'absolute',
      alignSelf: 'center',
       marginTop: 100,
        zIndex: 6,
         elevation: 3 
   }

})
