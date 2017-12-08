import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDya_NlfghdYbEybg75SSl-X8FH0n0A6Mk',
      authDomain: 'manager-b42cb.firebaseapp.com',
      databaseURL: 'https://manager-b42cb.firebaseio.com',
      projectId: 'manager-b42cb',
      storageBucket: 'manager-b42cb.appspot.com',
      messagingSenderId: '69204650190'
    };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;