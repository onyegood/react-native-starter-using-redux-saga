import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import Card from '../../component/common/cards/Card';
import CardSection from '../../component/common/cards/CardSection';
import Button from '../../component/forms/elements/Button';
import { userLoginRequest, loginEntries } from '../../redux/actions';
import LoginFormInput from '../../component/forms/auth/LoginFormInput';

export class SigninScene extends Component {

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.userLoginRequest({ email, password });
  }

  render() {

    return (
      <Card>
        <LoginFormInput {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
        <CardSection>
          <Text onPress={() => Actions.signup()}>Signup</Text>
          <Text onPress={() => Actions.forgotPassword()}>Forgot Password</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  userLoginRequest,
  loginEntries
};

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return {
    email,
    password
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScene);