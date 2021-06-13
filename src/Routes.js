import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './pages/Home';
import Categorias from './pages/Categorias';
import App from './pages/Cupons';

const Tab = createMaterialBottomTabNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="HOME"
                component={Home}
                options={{ headerShown: false }}
                color={'#f5af40'}
                />
                <Tab.Screen style={{color:'#f5af40'}}
                name="CATEGORIAS"
                component={Categorias}
                options={{ headerShown: false }}
                />
                <Tab.Screen style={{color:'#f5af40'}}
                name="CUPONS"
                component={App}
                options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

export default Routes;