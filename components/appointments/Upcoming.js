import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import {
  GeneralButton,
  Title,
  SelectOption,
  titleStyle,
} from '../styles/BaseStyles.js';
import Picker from 'react-native-wheel-picker';
var PickerItem = Picker.Item;

const textColor = css`
color: ${props => (props.isEdit ? '#7164ff' : 'white')};
`;

const UpcomingContainer = styled.View`
  width: 90%;
  height: 20%;
  margin-bottom: 5%;
`;

const UpcomingBox = styled.View`
  width: 90%;
  height: 100%;
  background-color: ${props => (props.isEdit ? 'white' : '#7164ff')};
  border: ${props => (props.isEdit ? '5px solid #7164ff' : 'white')};
  display: flex;
  flex-direction: row;
`;

const ThirdOfBox = styled.View`
  flex: 1;
  align-items: center;
  width: 33.33%;
  height: 100%;
  padding: 5%;
`;

const ThirdOfBoxMiddle = styled(ThirdOfBox)`
  align-items: flex-start;
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
border: 1px solid #7164ff;
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

  componentDidMount() {
    const { portfolio, addDefaultBook, books, id } = this.props;
    // if the appointment has no no book / portfolio
    // then assing the first book / porfolio by default
    if (portfolio === '') {
      addDefaultBook(books[0] && books[0].title, id);
    }
  }

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
      handleFocus,
      isNew,
      books,
      navigate,
      handleBookChange,
    } = this.props;

    return (
      <UpcomingContainer>
        <UpcomingBox isEdit={isEdit}>
          <ThirdOfBox>
            <TouchInput
              isEdit={isEdit}
              value={name}
              onChangeText={text => handleTextChange(text, 'name', id)}
              onFocus={() => !isNew && handleFocus(id)}
              onEndEditing={() => !isNew && handleFocus(id)}
            />
            <SubheadingTouchInput
              isEdit={isEdit}
              value={time}
              onChangeText={text => handleTextChange(text, 'time', id)}
              onFocus={() => !isNew && handleFocus(id)}
              onEndEditing={() => !isNew && handleFocus(id)}
            />
            <BodyTouchInput
              isEdit={isEdit}
              value={address}
              onChangeText={text => handleTextChange(text, 'address', id)}
              onFocus={() => !isNew && handleFocus(id)}
              onEndEditing={() => !isNew && handleFocus(id)}
            />
          </ThirdOfBox>
          <ThirdOfBoxMiddle>
            <Subheading isEdit={isEdit}>Notes</Subheading>
            <BodyTouchInput
              isEdit={isEdit}
              value={notes}
              onChangeText={text => handleTextChange(text, 'notes', id)}
              onFocus={() => !isNew && handleFocus(id)}
              onEndEditing={() => !isNew && handleFocus(id)}
            />
          </ThirdOfBoxMiddle>
          <ThirdOfBox>
            <Subheading isEdit={isEdit}>Portfolio</Subheading>
            <SelectOption>
              {books.length > 0
                ? <Picker
                    isEdit={isEdit}
                    style={{ width: 150, height: 220 }}
                    selectedValue={portfolio}
                    itemStyle={
                      // TODO item style currently is not updating
                      isEdit
                        ? { color: '#aaa', fontSize: 18 }
                        : { color: '#aaa', fontSize: 18 }
                    }
                    onValueChange={portfolio => handleBookChange(portfolio, id)}
                  >
                    {books.map(book =>
                      <PickerItem
                        label={book.title}
                        value={book.title}
                        key={book.id}
                      />
                    )}
                  </Picker>
                : <TouchableOpacity onPress={() => navigate('Portfolio')}>
                    <Title>Add New</Title>
                  </TouchableOpacity>}
            </SelectOption>
            <GeneralButton
              onPress={
                isEdit
                  ? () => handleSave(id)
                  : () =>
                      handleLaunch(portfolio || (books[0] && books[0].title))
                // above: add safety fallback if portfolio has not been selected
              }
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
