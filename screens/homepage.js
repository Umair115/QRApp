import React from 'react';
import { Image, StyleSheet, Text, View, KeyboardAvoidingView, Alert } from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';

export default class Homepage extends React.Component{

    state={
        Username:"null"
    }
    
    static navigationOptions={
        title:"Home Page"
    }

    componentDidMount(){
    this.unsuscribeAuth =  firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({
                    Username:user.email
                })
            }
            else {
                this.props.navigation.navigate("Login");
            }
        })
    }

    userSignout(){
        firebase.auth().signOut()
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

    componentWillUnmount(){
        this.unsuscribeAuth()
    }
    
    render(){
        return (
            <KeyboardAvoidingView 
            behavior="position"
            style={styles.container}>
              <Text
              style={{textAlign:"center"}}
              > You Are Logged In As {this.state.Username}
               </Text>

              <View style={{margin:10,alignItems:"center"}}>
                  <Image source={require("../assets/logo.png")}
                  style={{width:200,height:180}}
                  />
              </View>
              
              <Button
                style={{justifyContent:"center",backgroundColor:"#0E82B0"}}
                //onPress={()=>this.props.navigation.navigate("Login")}
                onPress={()=>this.userSignout()}
                >
                    <Text
                    style={{fontSize:22, color:"white"}}
                    >
                        Logout
                    </Text>
              </Button>


            </KeyboardAvoidingView>
          );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#499BD2',
    justifyContent: 'flex-start',
    padding: 100
  },
});
