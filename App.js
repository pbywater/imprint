import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Appointments from './components/Appointments';
import Portfolio from './components/portfolio/Portfolio';
import Book from './components/portfolio/Book';
import Stats from './components/Stats';

const App = TabNavigator(
  {
    Appointments: { screen: Appointments },
    Portfolio: { screen: Portfolio },
    Book: { screen: Book },
    Stats: { screen: Stats },
  },
  {
    tabBarPosition: 'top',
  }
);

export default App;
