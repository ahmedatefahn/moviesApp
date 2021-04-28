import React from 'react';
import {   Image, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Container } from 'native-base';
import { imageBaseUrl, baseUrl, apiKey } from '../../utils/constants'
import MainHeader from '../../components/MainHeader';
import { styles } from './styles'
import InfoItem from '../../components/InfoItem'
import GridView from '../../components/GrdView';
import Navigation from '../../utils/Navigation';
export default class PersonDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }

    }
    componentDidMount = () => {
        let { item } = this.props.route.params
        this.getFullData(item.id)
        this.setState({ item })
    }
    getFullData(id) {
        let url = baseUrl + `person/${id}?api_key=${apiKey}`

        fetch(url, {
            method: 'GET'
        }).then(result => result.json()).then((res) => {
            console.log(res)
            this.getPersonImages(id)
            this.setState({ item: { ...this.state.item, ...res } })
        }
        )
    }
    getPersonImages(id) {
        let url = baseUrl + `person/${id}/images?api_key=${apiKey}`

        fetch(url, {
            method: 'GET'
        }).then(result => result.json()).then((res) => {
            console.log(res)
            this.setState({ item: { ...this.state.item, ...res } })
        }
        )
    }
    render() {
        let { item } = this.state
        // console.log({item})
        return (
            <Container style={{ flex: 1 }}>
                <SafeAreaView />

                <MainHeader title={item?.name} />
                <ScrollView>
                    <TouchableOpacity onPress={() => Navigation.navigate('Images', { item: item.profile_path })}>
                        <Image source={{ uri: imageBaseUrl + 'w400/' + item.profile_path }} style={styles.imageStyle} />
                    </TouchableOpacity>
                    <Text style={styles.name}>{item.name}</Text>
                    <InfoItem title={'birthday'} value={item?.birthday} />
                    <InfoItem title={'department'} value={item?.known_for_department} />
                    <InfoItem title={'place of birth'} value={item?.place_of_birth} />

                    <InfoItem title={'biography'} value={item?.biography} />
                    <GridView items={item.profiles} />

                </ScrollView>
            </Container>
        )
    }
}






