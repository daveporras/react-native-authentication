import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }
  onLoginSuccess = () => {
    alert('You are logged!');
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  };
  onLoadingFail = () => {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  };
  loginHandler = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoadingFail);
      });
  };
  loginStatusHandler = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.loginHandler} >
        Log In
      </Button>
    );
  }
  render() {
    const { email, error, password } = this.state;
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@example.com"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="your password"
            value={password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        <Text>{ error }</Text>
        <CardSection>
          { this.loginStatusHandler() }
        </CardSection>
      </Card>
    );
  }
};

export default LoginForm;