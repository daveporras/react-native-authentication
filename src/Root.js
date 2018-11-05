import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from '../conf/firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class Root extends Component {
  constructor(){
    super();

    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return(
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  };
};

export default Root;