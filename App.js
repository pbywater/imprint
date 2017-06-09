import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Appointments from './components/appointments/Appointments';
import Portfolio from './components/portfolio/Portfolio';
import Book from './components/portfolio/Book';
import Stats from './components/stats/Stats';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers.js';
import { Font } from 'expo';
import styled, { css } from 'styled-components/native';

const AppWithNavigationState = TabNavigator(
  {
    Appointments: { screen: Appointments },
    Portfolio: { screen: Portfolio },
    Stats: { screen: Stats }
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeBackgroundColor: 'white',
      activeTintColor: '#38384E',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 20,
        fontFamily: 'Helvetica',
        padding: 15
      },
      style: {
        backgroundColor: '#38384e',
        height: 60
      }
    }
  }
);

class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      Helvetica: require('./assets/Helvetica.ttf')
    });
  }

  store = createStore(rootReducer);
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
