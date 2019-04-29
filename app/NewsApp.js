import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Routes from './routes.js'

class NewsApp extends Component {
    render() {
        return (
            <View>
                <Routes />
            </View>
        )
    }
}

export default NewsApp;
