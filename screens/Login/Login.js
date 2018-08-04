import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {
    Platform,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Logo from './Logo/Logo';
import LoginForm from './LoginForm/LoginForm';
import LoginButton from './LoginButton/LoginButton';
import LoginLinks from './LoginLinks/LoginLinks';

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between'
    }
});

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
                <LinearGradient
                    colors={['#000000', '#FF0000']}
                    style={styles.container}>
                    <Logo />
                    <LoginForm />
                    <LoginButton />
                    <LoginLinks  {...this.props} />
                </LinearGradient>
            </View>
        )
    }
}
