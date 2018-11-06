import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
  },
  labelText: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  }
})

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
  const { input, labelText, container } = styles;
  return(
    <View style={container} >
      <Text style={labelText}>{ label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={input}
      />
    </View>
  );
}

export default Input;