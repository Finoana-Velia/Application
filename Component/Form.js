import React from 'react';
import {View,Text,StyleSheet,TextInput,Button, Alert} from 'react-native';

import {connect} from 'react-redux';

class Form extends React.Component{

    _getCommande(){
        
        const rep = {id:Math.floor(Math.random() + Math.random()),title:'Commande'}
        const action = {type : 'TOGGLE_COMMANDE', value: rep}
        this.props.dispatch(action);
        const article = {...this.props.Panier}
        const drop = {type : 'RESET_BAG'}
        this.props.dispatch(drop);
        return this.props.navigation.navigate('Commande' , {article : article});
    }
   
    render() {
        return(
            
            <View style={{flex:1,marginTop:50}}> 
                
                <Text>Rue</Text>
                <TextInput
                    style={styles.input}
                    placeholder = 'Rue'
                />
                 <Text>Ville</Text>
                <TextInput
                    style={styles.input}
                    placeholder = 'Ville'
                />
                 <Text>Etat</Text>
                <TextInput
                    style={styles.input}
                    placeholder = 'Etat'
                />
                 <Text>Code Postal</Text>
                <TextInput
                    style={styles.input}
                    placeholder = 'Code Postal'
                />
                 <Text>Pays</Text>
                <TextInput
                    style={styles.input}
                    placeholder = 'Pays'
                />
                <Button
                    onPress = {() => this._getCommande()}
                    style={styles.button}
                    title = 'Valider'
                />
                
               
            
            </View>
        );
    }
}

const styles = StyleSheet.create({

    input : {
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor:'black',
        borderWidth:1,
        paddingLeft:5
    },
    button : {
        height : 50,
    },
});


const mapState = (state) =>{
    return{Panier : state.Panier,Commande : state.Commande}
}
export default connect(mapState)(Form);