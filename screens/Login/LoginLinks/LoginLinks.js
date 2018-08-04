import React from 'react';
import { View, Text } from 'react-native';

export default (props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'flex-end',
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={{
                marginLeft: 10,
                color: 'white',
                textDecorationLine: 'underline'
            }} >Forget Password?</Text>
            <Text style={{
                marginRight: 10,
                color: 'white',
                textDecorationLine: 'underline'
            }} onPress={
                () => {
                  props.navigation.navigate('Register');
                }
            } >Register New</Text>
        </View>
    )
}
