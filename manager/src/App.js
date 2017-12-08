import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { applyMiddleware } from './node_modules/redux/index';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;