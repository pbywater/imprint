import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Appointments from './components/appointments/Appointments';
import Portfolio from './components/portfolio/Portfolio';
import Book from './components/portfolio/Book';
import Stats from './components/stats/Stats';

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
