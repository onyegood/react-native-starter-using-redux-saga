import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import CardSection from '../../common/cards/CardSection';
import Input from '../elements/Input';
import { userEntries } from '../../../redux/actions';

class SignupFormInput extends Component {

  render() {
    const { email, password, firstName, middleName, lastName, gender, phone, role } = this.props;
    return (
      <View>
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
          <Input
            label="First Name"
            placeholder="First Name"
            onChangeText={value => this.props.userEntries({ prop: 'firstName', value })}
            value={firstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Middle Name"
            placeholder="Middle Name"
            onChangeText={value => this.props.userEntries({ prop: 'middleName', value })}
            value={middleName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Last Name"
            placeholder="Last Name"
            onChangeText={value => this.props.userEntries({ prop: 'lastName', value })}
            value={lastName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Gender"
            placeholder="Gender"
            onChangeText={value => this.props.userEntries({ prop: 'gender', value })}
            value={gender}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="Phone"
            onChangeText={value => this.props.userEntries({ prop: 'phone', value })}
            value={phone}
            autoCapitalize='none'
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="Password"
            onChangeText={value => this.props.userEntries({ prop: 'password', value })}
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
  userEntries
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormInput)