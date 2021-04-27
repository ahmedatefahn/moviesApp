import React from 'react';
import { Dimensions, View, Image, StyleSheet, Alert, ScrollView, BackHandler, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { Container, Button, Item, Header, Icon } from 'native-base';
import { imageBaseUrl, baseUrl, apiKey } from '../utils/constants'
import MainHeader from '../components/MainHeader';
import PhotoZoom from 'react-native-photo-zoom';
import RNFetchBlob from 'rn-fetch-blob'
const { config, fs } = RNFetchBlob
import Toast from 'react-native-simple-toast';

export default class Images extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            load: false
        }

    }
    componentDidMount = () => {
        let { item } = this.props.route.params
        this.setState({ item })
    }
    handleDownload = async () => {
        let date = new Date()
        let PictureDir = fs.dirs.PictureDir
        this.setState({ load: true })
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: false,
                path: PictureDir + "/me_" + Math.floor(date.getTime() + date.getSeconds() / 2),
                description: 'Downloading image.'
            }
        }
        config(options).fetch('GET', imageBaseUrl + '/original/' + this.state.item).then((res) => {
            Toast.show('Successfully downloaded', Toast.SHORT);

            this.setState({ load: false })

        }).catch(r => {
            this.setState({ load: false })
            Toast.show(' download faild', Toast.SHORT);

            console.log(r)
        })
    };

    render() {
        let { item } = this.state
        console.log(item)
        return (
            <Container style={{ flex: 1 }}>
                <SafeAreaView />

                <MainHeader onpress={this.handleDownload} type='image' download={this.state.load} />
                <PhotoZoom
                    minimumZoomScale={1}
                    maximumZoomScale={3}
                    androidScaleType='fitCenter'
                    style={style.imageStyle}
                    source={{ uri: imageBaseUrl + '/original/' + item }} />

            </Container>
        )
    }
}
const style = StyleSheet.create({
    imageStyle: {
        flex: 1
    }
})





