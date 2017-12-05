import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjfRQd5XfdV6cRhO4NabcH4v2mUMJLY5U',
      authDomain: 'auth-b9c55.firebaseapp.com',
      databaseURL: 'https://auth-b9c55.firebaseio.com',
      projectId: 'auth-b9c55',
      storageBucket: 'auth-b9c55.appspot.com',
      messagingSenderId: '26550986671'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;