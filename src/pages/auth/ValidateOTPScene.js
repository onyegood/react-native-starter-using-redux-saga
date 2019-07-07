import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import Card from '../../component/common/cards/Card';
import CardSection from '../../component/common/cards/CardSection';
import Input from '../../component/forms/elements/Input';
import Button from '../../component/forms/elements/Button';
import { validateOTPRequest, userEntries } from '../../redux/actions';

class ValidateOTPScene extends Component {

  onButtonPress = () => {
    const { passwordToken } = this.props;
    this.props.validateOTPRequest({ passwordToken });
  }

  render() {

    const { passwordToken } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={true}
            label="OTP"
            placeholder="Enter OTP"
            onChangeText={value => this.props.userEntries({ prop: 'passwordToken', value })}
            value={passwordToken}
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
  validateOTPRequest,
  userEntries
};

const mapStateToProps = (state) => {
  const { passwordToken } = state.users;
  return {
    passwordToken
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateOTPScene);