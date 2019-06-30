import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import CardSection from '../../../component/common/cards/CardSection';
import Input from '../../../component/forms/elements/Input';
import { loginEntries } from '../../../redux/actions';

class LoginFormInput extends Component {

  render() {
    const { email, password } = this.props;
    return (
      <View>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@domain.com"
            onChangeText={value => this.props.loginEntries({ prop: 'email', value })}
            value={email}
            autoCapitalize='none'
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="Password"
            onChangeText={value => this.props.loginEntries({ prop: 'password', value })}
            value={password}
            autoCapitalize='none'
          />
        </CardSection>
      </View>
    )
  }
}


const mapStateToProps = state => {
  const { email, password } = state.auth;
  return { email, password };
}

const mapDispatchToProps = {
  loginEntries
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormInput)