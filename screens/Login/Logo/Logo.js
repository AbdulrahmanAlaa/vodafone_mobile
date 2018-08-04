import React from 'react'
import { View, Text, Image } from 'react-native'
import { translate } from '../../../configurations/locals/i18n';

const childStyle = {
    flex: 1,
    alignItems: 'center'
};

const imageSrc = { url: require('../../../assets/images/vodafone.png') };

export default () => {
    return (
        <View style={{ flex: 2.5 }}>
            {/* Logo Section */}
            <View style={{
                flex: 1.5,
                alignItems: 'center'
            }} >
                <Image style={{
                    width: 200,
                    height: 200
                }} source={imageSrc.url} />
            </View>

            <View style={childStyle} >
                <Text style={{
                    fontSize: 35,
                    color: 'white'
                }}>
                    {translate('login.title')}
                </Text>
                <Text style={{
                    fontSize: 12,
                    color: 'lightgray'
                }}>
                    {translate('login.sub-title')}
                </Text>
            </View>
        </View>
    )
}
