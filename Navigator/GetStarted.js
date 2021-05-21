import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Component/Home.js';
import Menu from '../Component/Menu.js';

const Stack = createStackNavigator();

class GetStarted extends React.Component{
    render() {
        return(
            <Stack.Navigator
                headerMode = 'none'
            >
                <Stack.Screen
                    name = 'Home'
                    component = {Home}
                   
                />

                <Stack.Screen
                    name = 'Menu'
                    component = {Menu}
                    
                />
            </Stack.Navigator>
        );
    }
}

export default GetStarted;