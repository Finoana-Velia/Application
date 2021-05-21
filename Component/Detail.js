import React from 'react';
import {StyleSheet,View,Text,Button, ScrollView, Alert,Image} from 'react-native';

import {connect} from 'react-redux';

import Picture from './Collect.js';

class Detail extends React.Component{
    
    quantity = 0;

    constructor(props){
        super(props);
        this.state = {
            article :undefined,
        }
    }

    componentDidMount(){
        this.setState({
            article : this.props.route.params.idProduits,
        });
    }
    
    

    componentDidUpdate(){
        console.log(this.props.Panier);
    }

    
    
        _ajout(){
          const article = {...this.state.article};
          article.quantite = ++this.quantity;
         const action = { type : 'TOGGLE_BAG' , value : article}
         this.props.dispatch(action);
        }

     _affiche(){
         
        const article = this.state.article;
        //console.log(this.props);
         
        if(article != undefined) {
        return (
            
           
            <ScrollView style={{marginTop:50}}>
        <View style={styles.main} >
            <View Header style={styles.header}>
                <View style={styles.image}>
                    <Image
                        style={{width : 190, height : 200}}
                        source = {Picture[article.id]}
                    />
                </View>
                    <View style={styles.button}>
                        <View style={styles.boreder}></View>
                        <View style={styles.border}>
                            <Button
                                onPress = {()=>this._ajout()}
                                //onPress = {()=> Alert.alert("Ajout")}
                                title = 'Obtenir'
                            />
                        </View>
                        <View style={styles.boreder}></View>
                    </View>
            
            </View>

            <View Detail style={styles.detail}>
                <View style={styles.border}><Text style={{fontSize:20}}>Nom:{article.nom}</Text></View>
                <View style={styles.border}><Text style={{fontSize:20}}>Prix:{article.prix}$</Text></View>
                <View style={{flex:6},  {backgroundColor : 'silver'}}><Text style={{fontSize:30}}>{article.ingredient}</Text></View>
            </View>

        </View>
    </ScrollView>
        );
        }
         

     }



    render() {

       
        return(
           
            <View style={{flex:1}}>
                {this._affiche()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main : {
        flex:1,
        flexDirection: 'column',
    },

    header : {
        flex : 3 ,
        flexDirection : 'row',
        height : 200,
    },

    detail : {
        flex : 6,
        flexDirection : 'column',
    },

    button:{
        flex : 2,
        flexDirection : 'column',
    },

    image : {
        flex:2,
        flexDirection : 'column',
        backgroundColor : 'silver',
    },

    boreder: {
        flex:2,
        flexDirection:'row',
        
    }
});

// //CREATION D'UN STATE GLOBAL ET CONNECTION AU STATE
// const mapState = (state) => {
//     return {Panier : state.Panier};
// }

// export default connect(mapState)(Article);
const mapState = (state) => {
    return {Panier : state.Panier}
}
export default connect(mapState)(Detail);