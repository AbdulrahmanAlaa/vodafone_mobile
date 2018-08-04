import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import TextWithIcon from '../../components/TextWithIcon/TextWithIcon';
import {
    Platform,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const imageSrc = { url: require('../../assets/images/vodafone.png') };


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default () => {
    return (
        <View style={{ flex: 1,  flexDirection: 'column' }}>
            <LinearGradient
                colors={['#000000', '#FF0000']}
                style={styles.container}>
                {/* Logo Section */}
                <View style={{
                            alignItems: 'center'
                        }}>
                    <Image style={{
                        width: 200,
                        height: 200
                    }} source={imageSrc.url} />
                </View>

                <View style={{
                                alignItems: 'center',
                                flex: 1
                            }}>
                    <Text style={{
                        fontSize: 35,
                        color: 'white'
                    }}>
                        Vodamerrce
                    </Text>
                    <Text style={{
                        fontSize: 12,
                        color: 'lightgray'
                    }}>
                        The leading telecommunications company in the world
                     </Text>
                </View>

                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    {/* Email */}
                    <TextWithIcon
                        iconName='envelope'
                        iconSize={15}
                        iconColor='white'
                        value=''
                        placeholder='Email'
                        onChangeText={
                            () => { }
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
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
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
                <View style={{
                    flex: 1,
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
                    }} >Register New</Text>
                </View>
            </LinearGradient>
        </View>
    )
}
