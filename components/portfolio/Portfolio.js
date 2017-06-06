import React, { Component } from 'react';
import {
  Image,
  CameraRoll,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';

const BookCover = styled.View`
  ${/* border: palevioletred 1px solid; */ ''}
  width: 100%;
  height: 100%;
`;

const PortfolioList = styled.View`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const BookTouchable = styled(TouchableHighlight)`
border: palevioletred 1px solid;
width: 30%;
height: 30%;
`;

class Portfolio extends Component {
  state = {
    photos: [],
    books: [
      { title: 'Outdoors', id: 24758 },
      { title: 'Windsor', id: 31708 },
      { title: 'Burberry', id: 94478 },
      { title: 'Editorial', id: 13456 },
      { title: 'Outdoors', id: 34758 },
      { title: 'Windsor', id: 34708 },
      { title: 'Burberry', id: 34478 },
      { title: 'Editorial', id: 23456 },
    ],
  };

  render() {
    const { books, photos } = this.state;
    const { navigate } = this.props.navigation;

    const renderBooks = books.map(book => (
      <BookTouchable key={book.id} onPress={() => navigate('Appointments')}>
        <BookCover>
          <Text>{book.title}</Text>
        </BookCover>
      </BookTouchable>
    ));

    return (
      <PortfolioList>
        {renderBooks}
      </PortfolioList>
    );
  }
}

export default Portfolio;
