import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors, mainFont, lightFont } from '../utils/constants'

export default class InfoItem extends React.Component {

    render() {
        let { value, title } = this.props
        return (
             <View>
                 <Text style={style.textTitle}>{title} :</Text>
                 <Text style={style.textValue}>{value}</Text>
             </View>
       

        )
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        alignItems: 'center'
    },
   
    textTitle: {
        fontFamily: mainFont,
        fontSize: 16,
        color: colors.black,
        paddingHorizontal:20
    },
    textValue: {
        fontFamily: lightFont,
        fontSize: 12,
        color: colors.black,
        paddingHorizontal:20
    }

})
