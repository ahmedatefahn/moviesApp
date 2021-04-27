import React from 'react'
import { StyleSheet, Dimensions, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { colors, mainFont, lightFont ,imageBaseUrl} from '../utils/constants'
let {width}=Dimensions.get('screen')
export default class GridView extends React.Component {

    render() {
        let { items} = this.props
        return (
           
<ScrollView  contentContainerStyle={styles.container}>
    {items?.map((item,index)=>(
<Image key={index} source={{ uri: imageBaseUrl + 'w400/' +item.file_path }} style={styles.imageStyle} />
))}
</ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    imageStyle:{
        width:width*.3-10,
        height:width*.3,
        marginHorizontal:5,
        marginTop:20,
        borderRadius:10,
        resizeMode:'cover'
  
    } 

})
