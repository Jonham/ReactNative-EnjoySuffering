// this file works as a template file for any new ReactNative component


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class COMPONENT_NAME extends Component {
  render() {
    return (
      <View style={styles.parent}>
          <Text style={styles.title__text}>
              New Component
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    parent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title__text: {
        color: "black",
        fontSize: "20"
    }
});
