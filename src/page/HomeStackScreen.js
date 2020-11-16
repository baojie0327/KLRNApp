import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './bottom/HomeScreen';
import DetailScreen from './DetailScreen';
import StudyOneScreen from './StudyOneScreen';

const HomeStack=createStackNavigator();

function HomeStackScreen() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name={'Home'} component={HomeScreen} />
            <HomeStack.Screen name={'Detail'} component={DetailScreen}/>
            <HomeStack.Screen name={'StudyOne'} component={StudyOneScreen}/>
        </HomeStack.Navigator>
    );

}

export default HomeStackScreen;
