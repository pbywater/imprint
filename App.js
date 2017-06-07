import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Appointments from './components/appointments/Appointments';
import Portfolio from './components/portfolio/Portfolio';
import Book from './components/portfolio/Book';
import Stats from './components/stats/Stats';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers.js';

const AppWithNavigationState = TabNavigator(
  {
    Appointments: { screen: Appointments },
    Portfolio: { screen: Portfolio },
    Stats: { screen: Stats },
  },
  {
    tabBarPosition: 'top',
  }
);

class App extends Component {
  store = createStore(rootReducer);
  render() {
    return (
      <Provider store={this.store}>
      <AppWithNavigationState/>
    </Provider>
  );
  }
}


export default App;
