import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  view: {
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 60,
    paddingBottom: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
})

const Header = ({ title }) => {
  const { text, view } = styles;
  return(
    <View style={view}>
      <Text style={text}>{ title }</Text>
    </View>
  );
};

export default Header;