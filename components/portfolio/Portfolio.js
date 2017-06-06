import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import PortfolioList from './PortfolioList';
import Book from './Book';

const Portfolio = TabNavigator(
  {
    Portfolio: { screen: PortfolioList },
    Book: { screen: Book },
  },
  {
    tabBarPosition: 'bottom',
  }
);

export default Portfolio;
