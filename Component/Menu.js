import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
//import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DetailView from '../Navigator/DetailView.js';
import Way from '../Navigator/Way.js';
import Final from '../Navigator/Final.js'

import Produits from './Produits.js';
import Panier from './Panier.js';
import Commande from './Commande.js';
import Logout from './Logout.js';
import Cpt from './cpt.js'

import {Provider} from 'react-redux';
import Store from '../Store/Configure.js';

const Tab = createBottomTabNavigator();

class Menu extends React.Component{
    


    render(){

        //console.log("MENU UPLOAD!");
        return (
        
        <Provider store={Store}>
            <Tab.Navigator
            initialRouteName = 'Feed'
            tabBarOptions = {{
              activeTintColor : 'black',
              activeBackgroundColor : '#DDDDDD',
              inactiveBackgroundColor : '#FFFFFF'
            }}
        >

          <Tab.Screen
            name = 'Produits'
            component = {DetailView}
            options = {{
              tabBarLabel : 'Produits',
              tabBarIcon : ()=>{
                return(
                  <Image
                    style={styles.icon}
                    source = {require('../Image/product.png')}
                  />
                )
              }
            }}
          />

          <Tab.Screen
            name = 'Panier'
            component = {Way}
            options = {{
              tabBarLabel : 'Panier',
              tabBarIcon : ()=>{
                return(
                  <Image
                    style={styles.icon}
                    source = {require('../Image/shopping.png')}
                  />
                )
              }
            }}
          />

        <Tab.Screen
            name = 'Commande'
            component = {Final}
            options = {{
              tabBarLabel : 'Commande',
              tabBarIcon : ()=>{
                return(
                  <Image
                    style={styles.icon}
                    source = {require('../Image/truck.png')}
                  />
                )
              }
            }}
          />

          <Tab.Screen
            name = 'Deconnexion'
            component = {Logout}
            options = {{
              tabBarLabel : 'Deconnexion',
              tabBarIcon : ()=>{
                return(
                  <Image
                    style={styles.icon}
                    source = {require('../Image/user.png')}
                  />
                )
              }
            }}
          />

        </Tab.Navigator>
        </Provider> 
              
          );
    }
    
}

const styles = StyleSheet.create({
    icon : {
        width:30,
        height:30,
    }
});

export default Menu;