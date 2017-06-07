import React, { Component } from 'react';
import { Text, View, Picker, TouchableOpacity, TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import {
  GeneralButton,
  Title,
  SelectOption,
  titleStyle,
} from '../styles/BaseStyles.js';

const textColor = css`
color: ${props => (props.isEdit ? '#38384E' : 'white')};
`;

const UpcomingContainer = styled.View`
  width: 90%;
  height: 20%;
  margin-bottom: 5%;
`;

const UpcomingBox = styled.View`
  width: 90%;
  height: 100%;
  ${/* background-color: #38384E; */ ''}
  background-color: ${props => (props.isEdit ? 'white' : '#38384E')};
  border: ${props => (props.isEdit ? '5px solid #38384E' : 'white')};
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
  ${textColor};
`;

const BodyText = styled(Title)`
  font-size: 12;
`;

const TouchInput = styled.TextInput`
height: 40;
${titleStyle};
${textColor};
border: ${props => (props.isEdit ? '1px solid #38384E' : '1px solid white')};
`;

const BodyTouchInput = styled(TouchInput)`
  font-size: 12;
  font-style: normal;
  ${textColor};
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
    const {
      name,
      portfolio,
      notes,
      address,
      time,
      isEdit,
      handleTextChange,
      handleSave,
      handleLaunch,
      id,
    } = this.props;
    return (
      <UpcomingContainer>
        <UpcomingBox isEdit={isEdit}>
          <ThirdOfBox>
            <TouchInput
              isEdit={isEdit}
              value={name}
              onChangeText={text => handleTextChange(text, 'name', id)}
            />
            <SubheadingTouchInput
              isEdit={isEdit}
              value={time}
              onChangeText={text => handleTextChange(text, 'time', id)}
            />
            <BodyTouchInput
              isEdit={isEdit}
              value={address}
              onChangeText={text => handleTextChange(text, 'address', id)}
            />
          </ThirdOfBox>
          <ThirdOfBox>
            <Subheading isEdit={isEdit}>Notes</Subheading>
            <BodyTouchInput
              isEdit={isEdit}
              value={notes}
              onChangeText={text => handleTextChange(text, 'notes', id)}
            />
          </ThirdOfBox>
          <ThirdOfBox>
            <Subheading isEdit={isEdit}>Portfolio</Subheading>
            <SelectOption>
              <BodyText isEdit={isEdit}>{portfolio}</BodyText>
            </SelectOption>
            <GeneralButton
              onPress={isEdit ? () => handleSave(id) : handleLaunch}
            >
              <Title>
                {isEdit ? 'Save' : 'Launch'}
              </Title>
            </GeneralButton>
          </ThirdOfBox>
        </UpcomingBox>
      </UpcomingContainer>
    );
  }
}

export default Upcoming;
