/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
    PageWelcome
} from './RNComponents/PageWelcome/PageWelcome';

export default class EnjoySuffering extends Component {
  render() {
      let Greetings = "Welcome to Jonham's APP.";

    return (
      <View style={styles.container}>
          <PageWelcome Greetings={Greetings} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('EnjoySuffering', () => EnjoySuffering);
