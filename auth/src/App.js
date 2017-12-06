import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjfRQd5XfdV6cRhO4NabcH4v2mUMJLY5U',
      authDomain: 'auth-b9c55.firebaseapp.com',
      databaseURL: 'https://auth-b9c55.firebaseio.com',
      projectId: 'auth-b9c55',
      storageBucket: 'auth-b9c55.appspot.com',
      messagingSenderId: '26550986671'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      this.setState({ loggedIn: false});
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
    if (this.state.loggedIn) {
      return (
        <Button>
          Log out
        </Button>
      );
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;