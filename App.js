import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// import NewsApp from './app/NewsApp'
import store from './app/store';
import Routes from './app/routes'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    );
  }
}
