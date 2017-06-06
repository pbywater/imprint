import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import styled from "styled-components/native";
import { GeneralButton, Title, SelectOption } from "../styles/BaseStyles.js";

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

const Subheading = styled(Title)`
font-size: 15;
`;

const BodyText = styled(Title)`
font-size: 12;
`;

function Upcoming(props) {
  return (
    <UpcomingContainer>
      <UpcomingBox>
        <ThirdOfBox>
          <Title>{props.name}</Title>
          <Subheading>{props.time}</Subheading>
          <BodyText>{props.address}</BodyText>
        </ThirdOfBox>
        <ThirdOfBox>
          <Subheading>Notes</Subheading>
          <BodyText>{props.notes}</BodyText>
        </ThirdOfBox>
        <ThirdOfBox>
          <Subheading>Portfolio</Subheading>
          <SelectOption>
            <BodyText>{props.portfolio}</BodyText>
          </SelectOption>
          <GeneralButton>
            <Title>
              Launch
            </Title>
          </GeneralButton>
        </ThirdOfBox>
      </UpcomingBox>
    </UpcomingContainer>
  );
}

export default Upcoming;
