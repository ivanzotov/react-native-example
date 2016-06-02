/**
 * ProFit
 * https://github.com/ivanzotov/ProFit
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import configureStore from './app/configureStore';
import Main from './app/containers/main';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ProFit', () => Root);
