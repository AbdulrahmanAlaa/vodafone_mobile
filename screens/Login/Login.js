import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {  connect } from 'react-redux';

import {
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Logo from './Logo/Logo';
import LoginForm from './LoginForm/LoginForm';
import LoginButton from './LoginButton/LoginButton';
import LoginLinks from './LoginLinks/LoginLinks';
import I18n from 'react-native-i18n';
import GeneralError from '../../containers/GeneralError/GeneralError';
import { emailChanged } from '../../actions';
const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between'
    }
});

class Login extends Component {
    state = {
        currentLanguage: 'en'
    }

    render() {
        // throw new Error('asd');
        return (
                <GeneralError>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
                        <LinearGradient
                            colors={['#000000', '#FF0000']}
                            style={styles.container}>
                            <View style={{ flex: 0.5, flexDirection: 'row', padding: 10 }}>
                                <TouchableOpacity onPress={() => {
                                    I18n.locale = 'ar';
                                    this.setState({
                                        currentLanguage: I18n.locale
                                    });
                                }}>
                                    <Image style={{
                                        borderRadius: 50,
                                        width: 30,
                                        marginRight: 10
                                    }} width={30} height={30} source={require('../../assets/images/ar.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    I18n.locale = 'en';
                                    this.setState({
                                        currentLanguage: I18n.locale
                                    })
                                }}>
                                    <Image style={{
                                        borderRadius: 50,
                                        width: 30,
                                        marginRight: 10
                                    }} width={30} height={30} source={require('../../assets/images/us.png')} />
                                </TouchableOpacity>
                            </View>
                            <Logo />
                            <LoginForm {...this.props} />
                            <LoginButton />
                            <LoginLinks  {...this.props} />
                        </LinearGradient>
                    </View>
                </GeneralError>
        )
    }
}

const mapStateToProps = (state) => {
    const { email } = state.login;
    return {
        email
    }
}
export default connect(mapStateToProps, { emailChanged })(Login);