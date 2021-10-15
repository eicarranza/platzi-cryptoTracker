import React, { Component } from "react";
import {View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http';
import CoinsItem from "./CoinItem";
import Colors from "../../resources/colors"; 

class CoinsScreen extends Component {
    state = {
        coins: [],
        loading: false
    }

    componentDidMount = async() => {
        this.setState({ loading: true });

        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({coins: res.data, loading: false});
    }

    handlePress = () => {
        console.log("Go to detail", this.props);
        this.props.navigation.navigate("CoinDetail");
    }

    render(){
        const { coins, loading } = this.state;

        return (
          <View style={styles.container}>
              { loading ?
                <ActivityIndicator 
                    style={styles.loader} 
                    color="#fff" 
                    size="large" 
                />
                : null
              }
              <FlatList
                data={coins}
                renderItem={({ item }) => 
                    <CoinsItem item={item} />
                }
              />
          </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    titleText: {
        color: "#fff",
        textAlign: "center"
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    },
    loader:{
        margintTop: 60
    }

})

export default CoinsScreen;