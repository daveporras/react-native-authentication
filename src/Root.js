import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from '../conf/firebase';
import LoginForm from './components/LoginForm';
import { Header, Spinner, Button } from './components/common';

class Root extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: null,
    }
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };
  renderContent = () => {
    switch(this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Spinner size="large" />
        </View>);
    };
  };
  render() {
    console.log(this.state.loggedIn)
    return(
      <View>
        <Header title="Authentication" />
        { this.renderContent() }
      </View>
    );
  };
};

export default Root;