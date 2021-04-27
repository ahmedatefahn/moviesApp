import React from 'react';
import { Dimensions, View, Image,FlatList, Text, ScrollView,BackHandler, StatusBar, SafeAreaView ,TouchableOpacity} from "react-native";
import { Container, Button, Item,Header, Icon } from 'native-base';
import {getData} from '../../actions'
import {connect} from 'react-redux'

import MainHeader from '../../components/MainHeader';
import HomeCard from './HomeCard';

 class Home extends React.Component {
 constructor(props){
     super(props)
    this.state = {
        page: 1,
        refresh:false
        
    }
 
 }
 componentDidMount=()=>{
   this.props.data({page:1})
 }
itemSeperator=()=>(
<View style={{margin:5,borderTopColor:'black',borderWidth:.5}}/>
)
onRefresh=()=>{
    this.props.data({page:1,refresh:true})
}
onEndReached=()=>{
    this.setState({page:this.state.page+1},()=>this.props.data({page:this.state.page}))
}
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <SafeAreaView />
            <MainHeader type='main' />
               <FlatList 
               data={this.props.Popular?.data}
             renderItem={({item}) =>  <HomeCard item={item} />}
               style={{flex:1,marginTop:10}}
               keyExtractor={item=>item.id}
               refreshing={this.state.refresh}
               onRefresh={this.onRefresh}
               ItemSeparatorComponent={this.itemSeperator}
               onEndReached={this.onEndReached} />
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