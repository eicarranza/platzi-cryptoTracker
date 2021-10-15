import React, { Component } from "react";
import {View, Text, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http';

class CoinsScreen extends Component {
    state = {
        coins: []
    }

    componentDidMount = async() => {
        const coins = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        
        this.setState({coins:res.data});
    }

    handlePress = () => {
        console.log("Go to detail", this.props);
        this.props.navigation.navigate("CoinDetail");
    }

    render(){
        const { coins } = this.state;
        
        return (
          <View style={styles.container}>
              <Text style={styles.titleText}>Coins Screen</Text>
              <Pressable style={styles.btn} onPress={this.handlePress}>
                  <Text style={styles.btnText}>Detail</Text>
                </Pressable>
          </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
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
    }
})

export default CoinsScreen;