import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet } from "react-native";
import { Container } from 'native-base';
let { width, height } = Dimensions.get('screen')
import * as DB from '../utils/DB';

const Splash = ({ navigation }) => {
    useEffect(() => {
        DB.InitalDataBase()
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {

            navigation.replace('Home')
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Container style={style.container}>
            <Image source={require('../assets/splash.png')} style={style.logo} />
        </Container>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    logo: {
        width: width * .3,
        height: width * .3,
        alignSelf: 'center',
        resizeMode: 'contain'

    }
})

export default Splash


