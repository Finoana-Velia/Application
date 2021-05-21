import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logout from '../Component/Logout.js';
import Home from '../Component/Home.js';

const Stack = createStackNavigator();

class Deconnexion extends React.Component{


    render() {
        return (
            <Stack.Navigator
                headerMode = 'none'
            >
                <Stack.Screen
                    name='Logout'
                    component = {Logout}
                    
                />

                <Stack.Screen
                    name = 'Home'
                    component = {Home}
                   
                />

            </Stack.Navigator>
        );
    }
}

export default Deconnexion;