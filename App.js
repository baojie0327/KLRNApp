/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,View, Text,Image} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/page/bottom/HomeScreen';
import HealthScreen from './src/page/bottom/HealthScreen';
import ServiceScreen from './src/page/bottom/ServiceScreen';
import MineScreen from './src/page/bottom/MineScreen';
import DetailScreen from './src/page/DetailScreen';
import HomeStackScreen from './src/page/HomeStackScreen';

const Tab = createBottomTabNavigator();


const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? require('./images/home_select.png') : require('./images/home_normal.png');
                        }else if (route.name === 'Health') {
                               iconName = focused ? require('./images/health_select.png') : require('./images/health_normal.png');
                        }else if (route.name === 'Service') {
                               iconName = focused ? require('./images/service_select.png') : require('./images/service_normal.png');
                        }else if (route.name === 'Mine') {
                               iconName = focused ? require('./images/mine_select.png') : require('./images/mine_normal.png');
                        }

                        return <Image style={styles.tabBarIcon} source={iconName}/>

                    },
                })}
                tabBarOptions={
                    {
                        activeTintColor:'#2CB49D',
                        inactiveTintColor:'#606060',
                    }

                }
            >
                <Tab.Screen name="Home" component={HomeStackScreen} options={{title: '首页',tabBarBadge:2}}/>
                <Tab.Screen name="Health" component={HealthScreen}/>
                <Tab.Screen name="Service" component={ServiceScreen}/>
                <Tab.Screen name="Mine" component={MineScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {  // 整个容器
        flex: 1,
    },
    tabBarIcon:{  // tab icon
        width:19,
        height:19,
    }
});


export default App;
