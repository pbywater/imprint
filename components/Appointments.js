import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Upcoming from './appointments/Upcoming.js';

const AppointmentsContainer = styled.View`
flex: 1;
align-items: center;
`

class Appointments extends Component {
  state = {
    appointments : [{
      name:'Burberry',
      time: '14:30-17:30',
      address: 'SW1P 2AW',
      notes: 'bring heels',
      portfolio: 'Editorial',
    }, {
      name:'Topshop',
      time: '14:30-17:30',
      address: 'SW1P 2AW',
      notes: 'more dummy data',
      portfolio: 'Editorial',
    }]
  }
  render() {
    const upcomingList = this.state.appointments.map(appointment =>
       <Upcoming {...appointment}/>)
    return (
      <AppointmentsContainer>
        {upcomingList}
      </AppointmentsContainer>
    );
  }
}

export default Appointments;
