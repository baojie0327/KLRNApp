import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * 健康
 */
function MineScreen() {
    return (
        <View style={styles.container}>
            <Text>我的</Text>
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

export default MineScreen;

