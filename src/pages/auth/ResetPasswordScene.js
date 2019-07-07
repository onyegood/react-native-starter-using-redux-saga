import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from "react-native";
import { Actions } from 'react-native-router-flux';
import Card from '../../component/common/cards/Card';
import CardSection from '../../component/common/cards/CardSection';
import Input from '../../component/forms/elements/Input';
import Button from '../../component/forms/elements/Button';
import { resetPasswordRequest, userEntries } from '../../redux/actions';
import { AsyncStorage } from 'react-native';

class ResetPasswordScene extends Component {

  state = {
    userId: '',
    passwordToken: ''
  }

  componentDidMount = () => {
    this.getItems();
  }

  getItems = async () => {
    this.setState({
      userId: await AsyncStorage.getItem('userId'),
      passwordToken: await AsyncStorage.getItem('passwordToken')
    });
  }

  onButtonPress = () => {
    const { userId, passwordToken } = this.state;
    if (userId && passwordToken) {
      const { password } = this.props;
      this.props.resetPasswordRequest({ password, passwordToken, userId });
    }
  }

  render() {

    const { password, confirmPassword } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={true}
            label="New Password"
            placeholder="Password"
            onChangeText={value => this.props.userEntries({ prop: 'password', value })}
            value={password}
            autoCapitalize='none'
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            label="Confirm Password"
            placeholder="Confirm Password"
            onChangeText={value => this.props.userEntries({ prop: 'confirmPassword', value })}
            value={confirmPassword}
            autoCapitalize='none'
          />
        </CardSection>
        {password !== confirmPassword ? <Text>Password not Match</Text> : null}
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
  resetPasswordRequest,
  userEntries
};

const mapStateToProps = (state) => {
  const { email, password, confirmPassword } = state.users;
  return {
    email,
    password,
    confirmPassword
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScene);