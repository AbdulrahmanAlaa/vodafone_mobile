import React from 'react'
import TextWithIcon from '../../../components/TextWithIcon/TextWithIcon';
import { View } from 'react-native';

const childStyle = {
    flex: 1,
    alignItems: 'center'
};
export default (props) => {
    return (
        <View style={childStyle} >
            {/* Email */}
            <TextWithIcon
                iconName='envelope'
                iconSize={15}
                iconColor='white'
                value={props.email}
                placeholder='Email'
                onChangeText={
                   (text)=>{
                        props.emailChanged(text);
                    }
                }
            ></TextWithIcon>
            {/* Password */}

            <TextWithIcon
                iconName='key'
                iconSize={15}
                iconColor='white'
                value=''
                placeholder='Password'
                onChangeText={
                    () => { }
                }
            ></TextWithIcon>
        </View>
    )
}
