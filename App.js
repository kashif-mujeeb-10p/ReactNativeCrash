/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import Crashes from 'appcenter-crashes';
import Crashes, { ErrorAttachmentLog } from 'appcenter-crashes';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

Crashes.setListener({

  // getErrorAttachments(report) {
  //   debugger;
  //     const textAttachment = ErrorAttachmentLog.attachmentWithText('Hello text attachment!', 'hello.txt');
  //     const binaryAttachment = ErrorAttachmentLog.attachmentWithBinary(`${imageAsBase64string}`, 'logo.png', 'image/png');
  //     return [textAttachment, binaryAttachment];
  // },

    shouldProcess: function (report) {
// debugger;
        return true; // return true if the crash report should be processed, otherwise false.
    }
   //  ,
   //
   //  onBeforeSending: function (report) {
   //    debugger;
   //     // called after Crashes.process and before sending the crash.
   // },
   // onSendingSucceeded: function (report) {
   //   debugger;
   //     // called when crash report sent successfully.
   // },
   // onSendingFailed: function (report) {
   //   debugger;
   //     // called when crash report could not be sent.
   // }

    // Other callbacks must also be defined at the same time if used.
    // Default values are used if a method with return parameter is not defined.
})
export default class App extends Component<Props> {

  render() {
// Crashes.generateTestCrash();

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
