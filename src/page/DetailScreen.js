import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

/**
 * 健康
 */
function DetailScreen({route,navigation}) {
    const {itemId} = route.params;
    const {otherParam} = route.params;

    return (
        <View style={styles.container}>
            <Text>详情</Text>
            <Button
                title="Go to Detail again"
                onPress={() => navigation.push('Detail')}/>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}/>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}/>
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}/>
            <Text>itemId:{JSON.stringify(itemId)}</Text>
            <Text>otherParam:{JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Detail again"
                onPress={() => navigation.push('Detail', {
                    itemId: Math.floor(Math.random() * 100),
                })}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {   // 整体布局
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DetailScreen;

