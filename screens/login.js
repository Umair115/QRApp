import React from 'react';
import { Image, StyleSheet, Text, View, KeyboardAvoidingView ,Alert} from 'react-native';
import { Item, Input, Label, Button } from 'native-base';

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{

    state={
      Username:"",
      Password:""
    }
  

    static navigationOptions={
        title:"Login"
    }

    userSignin(username,password){
      firebase.auth().signInWithEmailAndPassword(username,password)
      .then(()=>{
        this.props.navigation.navigate("Homepage")
      })
      .catch(error=>{
        Alert.alert(error.message)
      })

    }

    render(){
        return (
            <KeyboardAvoidingView 
            behavior="position"
            style={styles.container}>
              
              <View style={{alignItems:"center"}}>
                  <Image source={require("../assets/logo.png")}
                  style={{width:200,height:180}}
                  />
              </View>
              <Item floatingLabel
              style={{borderBottomColor:"#0E82B0"}}
              >
                <Label>Username</Label>
                <Input 
                value={this.state.Username}
                onChangeText={(text)=>this.setState({Username:text})}
                />
              </Item>

              <Item floatingLabel
              style={{borderBottomColor:"#0E82B0"}}
              >
                <Label>Password</Label>
                <Input
                secureTextEntry={true} 
                value={this.state.Password}
                onChangeText={(text)=>this.setState({Password:text})}
                />
              </Item>

              <Button full rounded 
              style={{ margin:10, justifyContent:"center",backgroundColor:'#0E82B0' }}
              //onPress={()=>this.props.navigation.navigate("Homepage")}
              onPress={()=>this.userSignin(this.state.Username,this.state.Password)}
              
              > 
                <Text 
                style={{ fontSize:22,color:"white" }}
                >
                  Press Me
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
    padding: 10
  },
});
