import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const TextApp = (props) => {
  let [fontsLoaded] = Font.useFonts({
    'BricolageGrotesque_28pt-Bold': require('../../../../assets/fonts/BricolageGrotesque_28pt-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'BricolageGrotesque_28pt-Bold',
  },
});

export default TextApp;
