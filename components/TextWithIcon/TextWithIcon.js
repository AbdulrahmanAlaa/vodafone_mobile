import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput, View,Dimensions } from 'react-native';
export default (props) => {
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems:'center',
                width:Dimensions.get('window').width*2/3
            }
        }>
            <Icon
                style={
                    {
                        marginRight:10
                    }
                }
                name={props.iconName}
                size={props.iconSize}
                color={props.iconColor} />
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                width={200}
                onChangeText={() => props.onChangeText()} />
        </View>
    )
}
