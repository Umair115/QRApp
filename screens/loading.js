import React from 'react';
import {  StyleSheet,  View, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase';

export default class Loading extends React.Component{

    static navigationOptions={
       header:null
    }

    componentDidMount(){
        
    this.unsuscribeAuth =    firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("Homepage")
            }
            else {
                this.props.navigation.navigate("Login")
            }
        })

    }
    componentWillUnmount(){
        this.unsuscribeAuth()

    }
    render(){
        return (
                <View style={styles.container}>

                    <ActivityIndicator  size="large" color="#0E82B0"  />


                </View>
            );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 250
  },
});
