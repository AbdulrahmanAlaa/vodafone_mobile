import React, { Component } from 'react';
import { View } from 'react-native';

export default class GeneralError extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }
    render() {
        if (this.state.hasError) {
            return (
                <View>
                    {this.state.errorMessage}
                </View>
            )

        } else {
            return this.props.children;
        }
    }
}
