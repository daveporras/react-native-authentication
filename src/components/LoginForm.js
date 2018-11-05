import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { Input } from './common';

class LoginForm extends Component {
  state = {
    text: '',
  }
  render() {
    console.log(this.state.text)
    return(
      <Card>
        <CardSection>
          <Input
          label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button title="Log in" />
        </CardSection>
      </Card>
    );
  }
};

export default LoginForm;