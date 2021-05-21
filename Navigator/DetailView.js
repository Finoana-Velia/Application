import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Produits from '../Component/Produits.js';
import Detail from '../Component/Detail.js';


const Stack = createStackNavigator();

class DetailView extends React.Component{
    render(){
        return(
            <Stack.Navigator
                headerMode = 'none'
            >

                <Stack.Screen
                    name = 'Produits' //<= Reconnu par la props de produits
                    component = {Produits}
                    option = {{ title : 'Produits'}} //<= Titre afficher en haut de l'ecran
                />

                <Stack.Screen
                    name = 'Detail'   
                    component = {Detail}
                    option = {{title : 'Article'}}
                />

               

                
            </Stack.Navigator>

            
        );
    }
}

export default DetailView; 