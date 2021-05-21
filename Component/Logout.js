import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

class Logout extends React.Component{

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress = {() => this.props.navigation.navigate('Home')}
                    style={styles.button}
                >
                    <Text > DECONNEXION</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button : {
        padding : 16,
        width : 200,
        borderRadius:24,
        alignItems : 'center',
        backgroundColor : '#6495ed'
    },
});

export default Logout;