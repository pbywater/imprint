import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import styled from "styled-components/native";
import { TabNavigator } from "react-navigation";
import Upcoming from "./Upcoming.js";
import AddButtonSource from "./../../assets/add-button.png";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
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
  state = {
    appointments: [
      {
        name: "Burberry",
        time: "14:30-17:30",
        address: "SW1P 2AW",
        notes: "bring heels",
        portfolio: "Editorial",
        isEdit: false
      },
      {
        name: "Topshop",
        time: "14:30-17:30",
        address: "SW1P 2AW",
        notes: "more dummy data",
        portfolio: "Editorial",
        isEdit: false
      }
    ]
  };

  handleNewAppointment = () => {
    this.setState({
      appointments: [
        ...this.state.appointments,
        {
          name: "",
          time: "",
          address: "",
          notes: "",
          portfolio: "",
          isEdit: true,
          isNew: true
        }
      ]
    });
  };

  saveAppointment = id => {
    const { appointments } = this.state;

    if (appointments[id].name === "") {
      return;
    }

    const updatedAppointments = appointments.map((appointment, index) => {
      console.log(index, id);
      if (index === id) {
        return { ...appointment, isEdit: false, isNew: false };
      }
      return appointment;
    });

    this.setState({
      appointments: updatedAppointments
    });
  };

  launchBook = () => {
    console.log("launching book");
  };

  saveText = (text, key, id) => {
    const updatedAppointments = this.state.appointments.map(
      (appointment, index) => {
        if (index === id) {
          return { ...appointment, [key]: text };
        }
        return appointment;
      }
    );
    this.setState({
      appointments: updatedAppointments
    });
  };

  toggleEdit = id => {
    const updatedAppointments = this.state.appointments.map(
      (appointment, index) => {
        if (index === id) {
          return { ...appointment, isEdit: !appointment.isEdit };
        }
        return appointment;
      }
    );
    this.setState({
      appointments: updatedAppointments
    });
  };

  render() {
    console.log(this.state.appointments);
    const upcomingList = this.state.appointments.map((appointment, index) =>
      <Upcoming
        {...appointment}
        handleTextChange={this.saveText}
        handleSave={this.saveAppointment}
        handleLaunch={this.launchBook}
        handleFocus={this.toggleEdit}
        key={index}
        id={index}
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

export default Appointments;
