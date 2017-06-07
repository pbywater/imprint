import React, { Component } from 'react';
import { Text, View, Picker, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import {
  GeneralButton,
  Title,
  SelectOption,
  titleStyle,
} from '../styles/BaseStyles.js';

const UpcomingContainer = styled.View`
  width: 90%;
  height: 20%;
  margin-bottom: 5%;
`;

const UpcomingBox = styled.View`
  width: 90%;
  height: 100%;
  ${/* background-color: #38384E; */ ''}
  background-color: ${props => (props.isEdit ? 'blue' : '#38384E')};
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

const TouchInput = styled.TextInput`
height: 40;
border: 1px solid white;
${titleStyle};
color: white;
`;

const BodyTouchInput = styled(TouchInput)`
  font-size: 12;
  font-style: normal;
`;

const SubheadingTouchInput = styled(BodyTouchInput)`
  font-size: 15;
`;

class Upcoming extends Component {
  state = {
    edit: false,
    text: '',
  };

  editDetails = evt => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  render() {
    const { name, portfolio, notes, address, time } = this.props;
    return (
      <UpcomingContainer>
        <UpcomingBox>
          <ThirdOfBox>
            <TouchInput />
            <Subheading>{time}</Subheading>
            <BodyTouchInput />
          </ThirdOfBox>
          <ThirdOfBox>
            <Subheading>Notes</Subheading>
            <TouchInput />
          </ThirdOfBox>
          <ThirdOfBox>
            <Subheading>Portfolio</Subheading>
            <SelectOption>
              <BodyText>{portfolio}</BodyText>
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
}

export default Upcoming;
