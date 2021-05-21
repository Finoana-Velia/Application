import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

class Cpt extends React.Component{

    render() {

        const produit = 'Commande';
        return(
            <View style={styles.global}>
                <View style={styles.content}> 

                </View>
            </View>
            
        );
    }

}


const styles = StyleSheet.create({
    global : {
        flex:5,
        marginTop : 50,
        backgroundColor : 'blue',
    },

    image: {
       
        
        backgroundColor : 'silver',
    },

    content : {
        flex:1,
        height : 190,
        backgroundColor : 'silver',
        
    },
    
    info : {
        
    },

    button : {
        
    }
});

export default Cpt;