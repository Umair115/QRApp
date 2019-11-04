import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import login from './screens/login';
import hompage from './screens/homepage';
import loading from './screens/loading';

import * as firebase from 'firebase';
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig);

 const myswitch = createSwitchNavigator(
   {
   Homepage:hompage,
   Loading:loading,
   stack:createStackNavigator({
    Login:login
   })
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0E82B0',
    },
    headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
}}
)

export default createAppContainer(myswitch);

/*const AppNavigator=createStackNavigator({
  Home:{
    screen:UzairComp
  }
});
*/
//export default createAppContainer(AppNavigator);

