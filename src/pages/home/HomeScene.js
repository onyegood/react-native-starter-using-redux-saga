import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Button from '../../component/forms/elements/Button';
import { userLogoutRequest } from '../../redux/actions';


class HomeScene extends Component {
  componentDidMount() {
    this.props.userLogoutRequest()
  }
  render() {
    return (
      <View>
        <Button onPress={() => this.props.userLogoutRequest()}>
          Logout
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = {
  userLogoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScene)