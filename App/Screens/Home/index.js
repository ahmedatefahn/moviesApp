import React from 'react';
import { View, FlatList, SafeAreaView } from "react-native";
import { Container } from 'native-base';
import { getData } from '../../actions'
import { connect } from 'react-redux'
import { SelectFromDb } from '../../utils/DB';

import MainHeader from '../../components/MainHeader';
import HomeCard from './HomeCard';
import Loader from '../../components/Loader';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            refresh: false,
            sqldata: []

        }

    }
    componentDidMount = () => {
        this.props.data({ page: 1 })
        this.getPopularsFromSql()
    }
    async getPopularsFromSql() {
        let getPopularsFromSql;
        getPopularsFromSql = await SelectFromDb('select * from popular ')
        if (getPopularsFromSql.length > 0) {
            console.log("getPopularsFromSql", getPopularsFromSql)
            this.setState({ sqldata: getPopularsFromSql })
        } else {
            console.log("db is empty")
        }
    }
    itemSeperator = () => (
        <View style={{ margin: 5, borderTopColor: 'black', borderWidth: .5 }} />
    )
    onRefresh = () => {
        this.props.data({ page: 1, refresh: true })
    }
    onEndReached = () => {
        this.setState({ page: this.state.page + 1 }, () => this.props.data({ page: this.state.page }))
    }

    render() {
        return (
            <Container style={{ flex: 1 }}>
                <SafeAreaView />
                <MainHeader type='main' />
                {
                    this.props.Popular?.loading &&
                    <Loader />
                }
                <FlatList
                    data={this.props.Popular?.data?.length == 0 && this.state.sqldata != '' ? this.state.sqldata : this.props.Popular?.data}
                    renderItem={({ item }) => <HomeCard item={item} />}
                    style={{ flex: 1, marginTop: 10 }}
                    keyExtractor={item => item.id}
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
const mapDispatchToProps = dispatch => ({
    data: (param) => dispatch(getData(param))


})


export default connect(mapStateToProps, mapDispatchToProps)(Home)