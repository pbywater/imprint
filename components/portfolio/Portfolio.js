import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import PortfolioList from './PortfolioList';
import Book from './Book';

const Portfolio = StackNavigator({
  Portfolio: { screen: PortfolioList },
  Book: { screen: Book },
});

export default Portfolio;
