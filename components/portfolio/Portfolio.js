import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import PortfolioList from './PortfolioList';
import Book from './Book';
import PhotoGallery from './PhotoGallery';

const Portfolio = StackNavigator({
  Portfolio: { screen: PortfolioList },
  Book: {
    screen: Book,
    navigationOptions: {
      headerTintColor: '#38384E'
    }
  },
  Gallery: { screen: PhotoGallery, navigationOptions: { tabBarVisible: false } }
});

export default Portfolio;
