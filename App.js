import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Appointments from './components/Appointments';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';

const App = TabNavigator(
  {
    Appointments: { screen: Appointments },
    Portfolio: { screen: Portfolio },
    Stats: { screen: Stats },
  },
  {
    tabBarPosition: 'top',
  }
);

export default App;
