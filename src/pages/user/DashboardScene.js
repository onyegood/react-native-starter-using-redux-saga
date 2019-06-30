import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { userLogoutRequest } from '../../redux/actions';
import Button from '../../component/forms/elements/Button';

class DashboardScene extends Component {

  render() {
    const { auth } = this.props.auth;
    return (
      <View>
        {
          auth ?
            <Text>Welcome {auth.firstName + ' ' + auth.lastName}</Text> : null
        }
        <Button onPress={() => this.props.userLogoutRequest()}>
          Logout
      </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}
const mapDispatchToProps = {
  userLogoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScene);