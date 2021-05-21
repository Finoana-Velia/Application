import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';

import {connect} from 'react-redux';

import Picture from './Collect.js';

class Facture extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            article : undefined,
        }
    }

    componentDidMount(){
        this.setState({
            acrticle : this.props.data,
        })
    }

    // componentDidUpdate(){
    //     console.log(this.props.Panier);
    // }

    _costByProduits(prix,quantite){
       const tot = prix * quantite;
        return tot;
    }
    
   

    render() {

        const data = this.props.data;
        const total = this.props.total;
        const drop = this.props.drop;
        // console.log("===== facture ======")
        // console.log(this.props);
        
        
        //console.log(total);
        return (
            <View Global style={styles.global}>
                            
                            <View Image style={styles.image}> 
                            <Image
                                style={{height : 150, width : 107}}
                                source={Picture[data.id]}
                            />
                            </View>
                            <View Content style={styles.content}>
                                <View Info style={styles.info}>
                                    <View style={styles.label}><Text>Nom:{data.nom}</Text></View>
                                    <View style={styles.label}><Text>Prix:{data.prix}</Text></View>
                                    <View style={styles.label}><Text>Quantite:{data.quantite}</Text></View>
                                    <View style={styles.label}><Text>Total:{total}</Text></View>
                                </View>
                                <View style={{flex:1}}></View>
                                <View Button style={styles.button}>
                                   
                                    <Button 
                                        title = 'Annuler'
                                        onPress={() => drop(data)}
                                    />
                                </View>
                            </View>
                      
                        
            </View>
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

const mapState = () => {
    return {Panier : state.Panier}
}
export default connect()(Facture);