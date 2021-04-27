import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { Icon, Header } from 'native-base'
import { colors, boldFont } from '../utils/constants'
import Navigation from '../utils/Navigation'

export default class MainHeader extends React.Component {

    render() {
        let { type, title } = this.props
        return (
            type == 'main' ?
                <Header style={style.container} >

                    <Icon name='imdb' type='FontAwesome' style={style.idmbIcon} />
                </Header>
                :
                <Header style={[style.container, { justifyContent: 'space-between' }]} >
                    <View style={style.titleContainer}>
                        <Icon onPress={()=>Navigation.back()} name='arrow-left' type='FontAwesome' style={style.back} />
                        <Text style={style.text}>{title}</Text>
                    </View>
                    <Icon name='imdb' type='FontAwesome' style={style.idmbIcon} />

                </Header>

        )
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        alignItems: 'center'
    },
    idmbIcon: {
        color: colors.gold,
        fontSize: 40
    },
    titleContainer:{
flexDirection:'row',
alignItems:'center'
    },
    back: {
        color: colors.white, fontSize: 25
    },
    text: {
        fontFamily: boldFont,
        fontSize: 20,
        color: colors.white,
        paddingHorizontal:20
    }

})
