import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon, Header, Spinner } from 'native-base'
import { colors, boldFont } from '../utils/constants'
import Navigation from '../utils/Navigation'

export default class MainHeader extends React.Component {

    render() {
        let { type, title, download, onpress } = this.props
        return (
            type == 'main' ?
                <Header style={style.container} >

                    <Icon name='imdb' type='FontAwesome' style={style.idmbIcon} />
                </Header>
                :
                <Header style={[style.container, { justifyContent: 'space-between' }]} >
                    <View style={style.titleContainer}>
                        <Icon onPress={() => Navigation.back()} name='arrow-left' type='FontAwesome' style={style.back} />
                        <Text style={style.text}>{title}</Text>
                    </View>
                    {type == 'image' ?
                        [download ?
                            <Spinner color={colors.gold} />
                            :
                            <Icon name='download' onPress={onpress} type='FontAwesome' style={style.downloadIcon} />

                        ]
                        :
                        <Icon name='imdb' type='FontAwesome' style={style.idmbIcon} />
                    }
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
    downloadIcon: {
        color: colors.gold,
        fontSize: 25
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        color: colors.white, fontSize: 25
    },
    text: {
        fontFamily: boldFont,
        fontSize: 20,
        color: colors.white,
        paddingHorizontal: 20
    }

})
