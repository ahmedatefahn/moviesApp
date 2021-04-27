import React from 'react';
import { Dimensions, View, Image,FlatList, Text, ScrollView,BackHandler, StatusBar, SafeAreaView ,TouchableOpacity} from "react-native";
import { Container, Button, Item } from 'native-base';
import {getData} from '../actions'
import {connect} from 'react-redux'

const high = Dimensions.get("window").height
const wid = Dimensions.get("window").width
 class Home extends React.Component {
 constructor(props){
     super(props)
    this.state = {
        page: 1,
        action:false
    }
 
 }
 componentDidMount=()=>{
   this.props.data({page:1})
 }

    render() {
        console.log(this.props.Popular,'pp')
        return (
            <Container style={{ flex: 1 ,alignItems:'center'}}>
                <SafeAreaView />
                <Text>item.id}</Text>
               <FlatList 
               data={this.props.Popular?.data}
                 renderItem={({item}) =>  
                 
                 (<Text style={{backgroundColor:'blue',flex:1}}  
                      >{item.id}</Text>)
                     }
           style={{flex:1}}
               keyExtractor={item=>item.id}
               onEndReached={()=>{this.setState({page:this.state.page+1},()=>this.props.data({page:this.state.page}))}} />
            </Container>
        )
    }
}



const mapStateToProps = (state) => {
  const { Popular } = state
  return { Popular }
};
const mapDispatchToProps = dispatch =>({
    data:(param)=>dispatch(getData(param))
  

})


export default connect(mapStateToProps, mapDispatchToProps)(Home)