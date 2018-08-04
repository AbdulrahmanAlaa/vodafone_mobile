import React from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'

export default () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
        }} >
            <TouchableOpacity style={{
                borderColor: 'white',
                borderRadius: 15,
                borderWidth: 1,
                width: Dimensions.get('window').width * 2 / 3,
            }}>
                <Text style={
                    {
                        fontSize: 25,
                        alignSelf: 'center',
                        color: 'white',
                        margin: 10
                    }
                }>
                    Login
            </Text>
            </TouchableOpacity>
        </View>
    )
}
