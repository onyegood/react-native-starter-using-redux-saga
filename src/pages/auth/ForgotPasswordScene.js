import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import Card from '../../component/common/cards/Card';
import CardSection from '../../component/common/cards/CardSection';
import Input from '../../component/forms/elements/Input';
import Button from '../../component/forms/elements/Button';
import { forgotPasswordRequest, userEntries } from '../../redux/actions';

class ForgotPasswordScene extends Component {

  onButtonPress = () => {
    const { email, platform } = this.props;
    this.props.forgotPasswordRequest({ email, platform });
  }

  render() {

    const { email } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@domain.com"
            onChangeText={value => this.props.userEntries({ prop: 'email', value })}
            value={email}
            autoCapitalize='none'
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Submit
          </Button>
        </CardSection>
        <CardSection>
          <Text onPress={() => Actions.signin()}>Login</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  forgotPasswordRequest,
  userEntries
};

const mapStateToProps = (state) => {
  const { email, platform } = state.users;
  return {
    email,
    platform
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScene);