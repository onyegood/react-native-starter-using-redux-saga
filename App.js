import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import { Text, View } from 'react-native';
import jwtDecode from 'jwt-decode';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import RouterComponent from './src/router/RouterComponent';
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

import setAuthorizationHeader from './src/token/setAuthorizationHeader';
import { userLogoutRequest, fetchCurrentUserRequest } from './src/redux/actions/authAction';


class App extends Component {
  componentDidMount = () => {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        setAuthorizationHeader(token);
        // Set current user data
        store.dispatch(fetchCurrentUserRequest());
        //Decode token and get user info and exp
        const decoded = jwtDecode(token);
        //Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime + 12 * 60 * 60) {
          //Logout user user with expired token
          store.dispatch(userLogoutRequest());
        }
        // Redirect user to Dashboard if token is still valid
        Actions.main();
      } else {
        // Redirect user to Login page if token is not valid
        Actions.auth();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

sagaMiddleWare.run(rootSaga);
export default App;