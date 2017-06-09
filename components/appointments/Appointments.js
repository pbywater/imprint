import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Upcoming from './Upcoming.js';
import AddButtonSource from './../../assets/add-button.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addAppointment,
  editAppointment,
  toggleEdit,
  saveAppointment,
  changeBook,
  editMode
} from '../../redux/actions.js';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1
  }
});

const AddAppointmentTouchable = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 10%;
height: 10%;
`;

const AddAppointmentIcon = styled.Image`
flex: 1;
width: 80%;
height: auto;
`;

const AppointmentsContainer = styled.ScrollView``;

class Appointments extends Component {
  handleNewAppointment = () => {
    this.props.addAppointment({
      name: '',
      time: '',
      address: '',
      notes: '',
      portfolio: '',
      isEdit: true,
      isNew: true
    });
  };

  saveAppointment = id => {
    if (this.props.state.appointments[id].name === '') {
      return;
    }
    this.props.saveAppointment(id);
  };

  launchBook = portfolio => {
    if (
      this.props.state.bookData.books.some(book => book.title === portfolio)
    ) {
      this.props.navigation.navigate('Book', { title: portfolio });
    }
  };

  saveText = (text, key, id) => {
    this.props.editAppointment(text, key, id);
  };

  toggleEdit = id => {
    this.props.toggleEdit(id);
  };

  editmode = id => {
    this.props.editMode(id);
  };

  changeBook = (portfolio, id) => {
    this.props.changeBook(portfolio, id);
    this.props.editMode(id);
  };

  saveDefaultBook = (portfolio, id) => {
    this.props.changeBook(portfolio, id);
  };

  render() {
    const { appointments } = this.props.state;
    const { books } = this.props.state.bookData;
    const { navigate } = this.props.navigation;
    const upcomingList = appointments.map((appointment, index) =>
      <Upcoming
        {...appointment}
        handleTextChange={this.saveText}
        handleSave={this.saveAppointment}
        handleLaunch={this.launchBook}
        handleFocus={this.toggleEdit}
        handleBookChange={this.changeBook}
        addDefaultBook={this.saveDefaultBook}
        key={index}
        id={index}
        books={books}
        navigate={navigate}
      />
    );
    return (
      <AppointmentsContainer contentContainerStyle={styles.center}>
        {upcomingList}
        <AddAppointmentTouchable onPress={this.handleNewAppointment}>
          <AddAppointmentIcon source={AddButtonSource} resizeMode="contain" />
        </AddAppointmentTouchable>
      </AppointmentsContainer>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addAppointment,
      editAppointment,
      toggleEdit,
      saveAppointment,
      changeBook,
      editMode
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
