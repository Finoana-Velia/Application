import React from 'react';
import {StyleSheet,View,Text, FlatList} from 'react-native';

import Item from './Item.js';

import Rayon from '../Rayon.json';

class Produits extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            produits : Rayon,
        }
    }

    _detail = (id) => {
        this.props.navigation.navigate('Detail',{idProduits : id});
    }

    render() {
        
        return(
           <FlatList
                data = {this.state.produits}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {({item}) => 
                    <Item 
                        produit = {item}
                        detail = {this._detail}
                    />
                }
           />
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
});

export default Produits;