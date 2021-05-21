import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Panier from '../Component/Panier.js';
import Form from '../Component/Form.js';

const Stack = createStackNavigator();

class Way extends React.Component{
    render() {
        return (
            <Stack.Navigator
                headerMode = 'none'
            >
                <Stack.Screen
                    name='Panier'
                    component = {Panier}
                    option = {{title : 'Panier'}}
                />

                <Stack.Screen
                    name = 'Form'
                    component = {Form}
                    options = {{title : 'Coordonner'}}
                />

            </Stack.Navigator>
        );
    }
}

export default Way;