// LISTE
import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,Button, Alert} from 'react-native';

import {connect} from 'react-redux';

import Picture from './Collect.js';

class Item extends React.Component{

    quantity = 0;
    _ajout(){
        const article = {...this.props.produit};
        article.quantite = ++this.quantity;
       const action = { type : 'TOGGLE_BAG' , value : article}
       this.props.dispatch(action);
    }

    getImage(image){
        return image;
    }
   
    render() {
        
        const produit = this.props.produit;
        const detail = this.props.detail; //<= props recuperer venant de Produits.js ceci est un foncition (_detailArticle())

        return(
            
            <View Global style={styles.global}>

                <TouchableOpacity
                    //onPress={()=>Alert.alert('Voir detail de l\'article')}
                    onPress={()=>detail(produit)}
                    style={styles.image}>
                    <View Image style={styles.image}> 
                        <Image
                            style={{height:150,width:107}}
                            source = {Picture[produit.id]} 
                        />
                    </View>
                </TouchableOpacity>

                <View Content style={styles.content}>

                    <TouchableOpacity 
                    //onPress = {() => Alert.alert('Voir detail')}
                        onPress = {()=>detail(produit)}
                        style={styles.info}
                    >
                        <View Info style={styles.info}>
                            <View style={txt.label}><Text>Nom: {produit.nom}</Text></View>
                            <View style={txt.label}><Text>Prix:{produit.prix}$</Text></View>
                            
                        </View>
                    </TouchableOpacity>

                    <View style={{flex:1}}></View>
                    <View Button style={styles.button}>
                        <TouchableOpacity
                            style = {styles.valide}
                            onPress={()=>this._ajout()}>
                                
                            <Text>Obtenir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        );
    }
}

const txt = StyleSheet.create({
    label : {
        flex:1,
        flexDirection : 'row',
    }
});

const styles = StyleSheet.create({
    global : {
        height : 150,
        marginTop:50,
        flex:1,
        flexDirection : 'row'
    },

    image: {
        flex : 2,
        flexDirection : 'column',
        backgroundColor : 'silver',
    },

    content : {
        flex:5,
        flexDirection : 'column',
    },
    
    info : {
        flex:3,
        flexDirection : 'column',
    },

    button : {
        flex:2,
        flexDirection : 'row',
        alignItems : 'center'
    },

    valide : {
        borderRadius:24,
        alignItems : 'center',
        backgroundColor : '#6495ed',
        width : 90,
        padding : 16
    }

   
});



const mapState = (state) =>{
    return {Panier : state.Panier}
}
export default connect(mapState)(Item);