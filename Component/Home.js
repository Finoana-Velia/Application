import React from 'react';
import {StyleSheet,View,Text,Button,TextInput,Image, 
    TouchableOpacity,ScrollView,KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard,Alert} from 'react-native';

import Data from '../Data.json';

class Home extends React.Component{

    name = '';
    pass = '';

    
    _login() {
       if((this.name == Data.Name)&& (this.pass == Data.Password))
        return this.props.navigation.navigate('Menu');
       else
       return Alert.alert("ERROR"); 
    }

    render(){
        return (
            <KeyboardAvoidingView
                behavior = {Platform.OS === "ios"?"padding":"height"}
                style={styles.global}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.global}>
                <View style={styles.view}>
                    <View style={styles.image}>
                        <Image
                            style = {styles.image}
                            source = {require('../Image/market.png')}
                        />
                    </View>
                </View>
                <View style={styles.form}>
                    <View>
                        <View Title style={styles.title}>
                            <Text style={{fontSize:40}}>MARKET SHOP</Text>
                        </View>
                       <View style={styles.fin}> 
                       <View style={{marginTop:10}}>

                            <Text style={styles.label}>Username</Text>
                            <TextInput
                                onChangeText = {(text) =>{this.name = text}}
                                style={styles.input}
                                placeholder = 'Username'
                            />
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                secureTextEntry = {true}
                                onChangeText = {(text) => {this.pass = text}}
                                onSubmitEditing = {() => this._login()}
                                style={styles.input}
                                placeholder = 'Password'
                            />
                            <TouchableOpacity
                                onPress = {() => this._login()}
                                style = {styles.button}
                            >
                                <Text>LOGIN</Text>
                            </TouchableOpacity>
                            </View>
                            
                    </View>
                </View>
                    </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
      );
    }
}


const styles = StyleSheet.create({
    global : {
        flex : 1,
        
    },
    logo : {
        fontSize : 30,
        alignItems : 'center',
    },  
    view : {
        flex : 6,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },

    form : {
        flex : 5,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        
    },

    image : {
        height : 300,
        width : 300,
       
    },

    title : {
        flex:1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    button : {
        width : 300,
        height:50,
        borderWidth : 1,
        backgroundColor : '#6495ed',
        marginTop : 30,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 24
    },

    fin : {
        flex : 6,
        flexDirection : 'row',
       
       
    },

     input : {
        width : 300,
        height:50,
        borderColor:'black',
        borderWidth:1,
        paddingLeft:5
    },
    label : {
        fontSize : 20,
        paddingHorizontal:10,
    }
    
});

export default Home;