import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import Card from '../../component/common/cards/Card';
import CardSection from '../../component/common/cards/CardSection';
import Button from '../../component/forms/elements/Button';
import { userSignupRequest, loginEntries } from '../../redux/actions';
import SignupFormInput from '../../component/forms/auth/SignupFormInput';
class SigninScene extends Component {

  onButtonPress = () => {
    const { email, password, firstName, middleName, lastName, gender, phone, role } = this.props;
    this.props.userSignupRequest({ email, password, firstName, middleName, lastName, gender, phone, role });
  }

  render() {

    return (
      <Card>
        <SignupFormInput {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Signup
          </Button>
        </CardSection>
        <CardSection>
          <Text onPress={() => Actions.signin()}>Login</Text>
          <Text onPress={() => Actions.resetPassword()}>Reset Password</Text>
          <Text onPress={() => Actions.forgotPassword()}>Forgot Password</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  userSignupRequest,
  loginEntries
};

const mapStateToProps = (state) => {
  const { email, password, firstName, middleName, lastName, gender, phone, role } = state.auth;
  return { email, password, firstName, middleName, lastName, gender, phone, role };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScene);