import React from 'react';
import {StyleSheet,View,Text,FlatList, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';


class Commande extends React.Component{

    
    render(){
        console.log(this.props);
        //const article = this.props.route.params.article;

        return(
            <View>
                <FlatList
                    data = {this.props.Commande}
                    keyExtractor = {(item) => item.id.toString()}
                    extraData = {this.props.Commande}
                    renderItem = {({item}) => 
                    <TouchableOpacity
                       onPress= {()=>this.props.navigation.navigate('Liste' , {produits : this.props.Panier})}
                    >
                            <View Global style={styles.global}>
                                    <View Image style={styles.image}>

                                    </View>
                                    <View Content style={styles.content}>
                                            <View Info style={styles.info}>
                                                    <View style={styles.label}>
                                                        <Text style={{fontSize:50}}>{item.title}</Text></View>
                                            </View>
                                    </View>
                            </View>
                     </TouchableOpacity>   
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

//export default Commande;
const mapState = (state) => {
    return {Panier : state.Panier,Commande : state.Commande}
} 

export default connect(mapState)(Commande);