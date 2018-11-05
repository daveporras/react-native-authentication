import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 3
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#FFFFFF'
  }
})

const Button = ({ onPress, title }) => {
  const { button, text } = styles;
  return(
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={text}>{ title }</Text>
    </TouchableOpacity>
  );
};

export default Button;