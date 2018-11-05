import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    borderBottomWidth: 1
  }
})

const CardSection = ({ children }) => {
  const { container } = styles;
  return(
    <View style={container}>
      { children }
    </View>
  );
};

export default CardSection;