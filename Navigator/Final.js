import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Commande from '../Component/Commande.js';
import Liste from '../Component/Liste.js';

const Stack = createStackNavigator();

class Final extends React.Component{
    render() {
        return (
            <Stack.Navigator
                headerMode = 'none'
            >
                <Stack.Screen
                    name='Commande'
                    component = {Commande}
                    option = {{title : 'Commande'}}
                />

                <Stack.Screen
                    name = 'Liste'
                    component = {Liste}
                    options = {{title : 'Liste'}}
                />

            </Stack.Navigator>
        );
    }
}

export default Final;