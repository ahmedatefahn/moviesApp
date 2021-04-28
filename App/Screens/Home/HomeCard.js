import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'
import FastImage from 'react-native-fast-image'
import { imageBaseUrl, boldFont, lightFont } from '../../utils/constants';
import Navigation from '../../utils/Navigation';
export default class HomeCard extends PureComponent {

    render() {
        let { item } = this.props
        console.log(item)
        return (
            <TouchableOpacity onPress={() => Navigation.navigate('PersonDetails', { item })} >
                <View style={style.container}>
                    <FastImage
                        style={{ width: 100, height: 100 }}
                        source={{
                            uri: imageBaseUrl + 'w200/' + item.profile_path,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <View>
                        <Text style={{ fontFamily: boldFont }}>{item.name}</Text>
                        <Text style={{ fontFamily: lightFont }}>field : {item.known_for_department}</Text>
                        <Text style={{ fontFamily: lightFont }}>popularity :{item.popularity}</Text>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }
}
const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: 100, height: 100
    }
})