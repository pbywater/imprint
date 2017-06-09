import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import PortfolioList from './PortfolioList';
import Book from './Book';
import PhotoGallery from './PhotoGallery';

const Portfolio = StackNavigator(
  {
    Portfolio: { screen: PortfolioList },
    Book: { screen: Book },
    Gallery: {
      screen: PhotoGallery,
      navigationOptions: { tabBarVisible: false },
    },
  },
  {
    navigationOptions: {
      headerTintColor: '#38384E',
      headerStyle: {
        backgroundColor: 'white',
      },
    },
  }
);

export default Portfolio;
