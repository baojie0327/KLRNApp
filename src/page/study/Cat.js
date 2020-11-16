import React from 'react';
import {View, Text, TextInput} from 'react-native';

function Cat(props) {
    // name变量
    const name = 'Lucy';

    // 定义一个方法
    function getFullName(firstName, secondName, thirdName) {
        return firstName + ' ' + secondName + ' ' + thirdName;
    }

    return (
        <View>
            <Text>Hello,I am {getFullName("Lucy","Tom","Jack")}</Text>
            <Text>Hello,I am {props.name} </Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="please input your name!"
            />
        </View>
    );


}

export default Cat;
