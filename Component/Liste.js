import React from 'react';
import {StyleSheet,View,Text,FlatList,Image} from 'react-native';

import Picture from './Collect.js';

class Liste extends React.Component{

    render() {
        const produits = this.props.route.params.produits;
        return(
            <View>
                <FlatList
                    data = {produits}
                    keyExtractor = {(item) => item.id.toString()}
                    extraData = {this.props.Panier}
                    renderItem = {({item}) => 
                    
                            <View Global style={styles.global}>
                                    <View Image style={styles.image}>
                                    <Image
                                        style={{height : 150, width : 107}}
                                        source={Picture[item.id]}
                                    />
                                    </View>
                                    <View Content style={styles.content}>
                                            <View Info style={styles.info}>
                                                    <View style={styles.label}>
                                                        <Text style={{fontSize:50}}>{item.nom}</Text></View>
                                                        <Text style={{fontSize:50}}>{item.quantite}</Text></View>
                                                        
                                            </View>
                            </View>
                            
                      
                    }
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    global : {
        flex :1,
        height: 190,
        marginTop : 50,
        flex:1,
        flexDirection : 'row',
    },
    label : {
            flex: 2,
            flexDirection : 'row',
    },
    info : {
            flex:3,
            flexDirection : 'column',
    },
    image : {
            flex:2,
            flexDirection : 'column',
            backgroundColor : 'silver',
    },
    content : {
            flex:5,
            flexDirection : 'column',
    }

});

export default Liste;