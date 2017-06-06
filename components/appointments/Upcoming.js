import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const UpcomingContainer = styled.View`
width: 90%;
height: 20%;
margin-bottom: 5%;
`;

const UpcomingBox = styled.View`
width: 90%;
height: 100%;
background-color: #38384E;
display: flex;
flex-direction: row;
`;

const ThirdOfBox = styled.View`
width: 33.33%;
height: 100%;
padding: 5%;
`;

const AppointmentTitle = styled.Text`
font-family: Helvetica;
font-style: italic;
font-weight: 700;
font-size: 20;
color: white;
padding: 2%;
`;

const Subheading = styled.Text`
font-family: Helvetica;
font-size: 15;
font-weight: 700;
color: white;
padding: 2%;
`;

const BodyText = styled.Text`
font-family: Helvetica;
font-size: 12;
color: white;
padding: 2%;
`;

function Upcoming(props) {
  return (
    <UpcomingContainer>
      <UpcomingBox>
        <ThirdOfBox>
          <AppointmentTitle>{props.name}</AppointmentTitle>
          <Subheading>{props.time}</Subheading>
          <BodyText>{props.address}</BodyText>
        </ThirdOfBox>
        <ThirdOfBox>
          <Subheading>Notes</Subheading>
          <BodyText>{props.notes}</BodyText>
        </ThirdOfBox>
        <ThirdOfBox>
          <Subheading>Portfolio</Subheading>
        </ThirdOfBox>
      </UpcomingBox>
    </UpcomingContainer>
  );
}

export default Upcoming;
