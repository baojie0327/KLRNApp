import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Cat from './study/Cat';

function StudyOneScreen() {

    return (
        <View>
            <Cat name={"Jack"}/>
            <Cat name={"Toms"}/>
        </View>


    );

}


export default StudyOneScreen;
