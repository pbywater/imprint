import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Upcoming from './appointments/Upcoming.js';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
  },
});

const AppointmentsContainer = styled.ScrollView``;

class Appointments extends Component {
  state = {
    appointments: [
      {
        name: 'Burberry',
        time: '14:30-17:30',
        address: 'SW1P 2AW',
        notes: 'bring heels',
        portfolio: 'Editorial',
      },
      {
        name: 'Topshop',
        time: '14:30-17:30',
        address: 'SW1P 2AW',
        notes: 'more dummy data',
        portfolio: 'Editorial',
      },
    ],
  };
  render() {
    const upcomingList = this.state.appointments.map((appointment, index) => (
      <Upcoming {...appointment} key={index} />
    ));
    return (
      <AppointmentsContainer contentContainerStyle={styles.center}>
        {upcomingList}
      </AppointmentsContainer>
    );
  }
}

export default Appointments;
