import React from 'react';
import {StyleSheet,Text,View,FlatList,Button,Alert,ScrollView} from 'react-native';

import Facture from './Facture.js';

import {connect} from 'react-redux';

class Panier extends React.Component{

    
    
    
    _Total(n,m){
        const t = n*m;
        return t;
    }

    _dispatchObject = (action) => {
        const drop = { type : 'DELETE_BAG' , value : action}
         this.props.dispatch(drop);
         console.log('effectuer')
    }

    _isValide(){
        if(this.props.Panier.lenght!==0){
        
        
            return this.props.navigation.navigate('Form');
        }
        else {
            Alert.alert("Vous n\'avez pas obtenu d\'article");
        }
    }
    
    render() {
       console.log("==== Panier ====");
        console.log(this.props);
        //console.log(this.props.Panier);
        //console.log(this._total());
        
        return(
            <ScrollView>
                <View>
               
               <FlatList
                   data = {this.props.Panier}
                   keyExtractor = {(item) => item.id.toString()}
                   extraData = {this.props.Panier}
                   renderItem = {({item})=><Facture    
                               data = {item}
                               total = {this._Total(item.prix,item.quantite)}
                               drop = {this._dispatchObject}

                       />
                      
                     
                       }
               />

               <View Submit style={{marginTop:50}}>
                               
                               <Button
                                   onPress={()=>this._isValide()}
                                   title = 'Valider'
                               />
                               
               </View>

           </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        height : 150,
        marginTop : 50,
        flex : 1,
        flexDirection : 'row',
    },
    button : {
        flex:2,
        flexDirection : 'row',
    },
    label : {
        flex : 1,
        flexDirection : 'row',
    },
    info : {
        flex:3,
        flexDirection : 'column',
    },

    image : {
        flex : 2,
        flexDirection : 'column',
        backgroundColor : 'silver',
    },

    content : {
        flex : 5,
        flexDirection : 'column',
    },

});


const mapState = (state) =>{
    return{Panier : state.Panier}
}
export default connect(mapState)(Panier);