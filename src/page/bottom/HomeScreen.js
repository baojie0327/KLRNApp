import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

/**
 * 首页
 */
function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>首页</Text>
            <Button
                title="Go to Detail"
                onPress={() => this.props.navigation.navigate('Detail')}/>
            <Button
                title="Go to Detail with params"
                onPress={() => {
                    navigation.navigate('Detail', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                        name: '详情',
                    });
                }}/>
            <Button
                title="去学习"
                onPress={() => navigation.navigate('StudyOne')}/>
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

export default HomeScreen;

