import React, { Component } from 'react';
import {
  Image,
  CameraRoll,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';

import AddButtonSource from './../../assets/add-button.png';
import defaultFeaturedImage from './../../assets/default-featured-image.png';

import { Title, AddBookIcon, AddBookTouchable } from '../styles/BaseStyles.js';

const BookCover = styled.Image`
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

const BookContainer = styled.View`
  width: 30%;
  height: 30%;
`;

const BookTitle = styled.TextInput`
  text-align: center;
  width: 100%;
  height: 10%;
  ::placeholder {
    color: black;
  }
`;

const BookTouchable = styled(TouchableHighlight)`
  width: 100%;
  height: 90%;
`;

const AddNewBookTouchable = styled(AddBookTouchable)`
  width: 100%;
  height: 90%;
`;

class Portfolio extends Component {
  state = {
    text: 'Add title',
    photos: [],
    books: [
      { title: 'Outdoors', id: 24758 },
      // { title: 'Windsor', id: 31708 },
      // { title: 'Burberry', id: 94478 },
      // { title: 'Editorial', id: 13456 },
      // { title: 'Outdoors', id: 34758 },
      // { title: 'Windsor', id: 34708 },
      // { title: 'Burberry', id: 34478 },
      // { title: 'Editorial', id: 23456 },
    ],
  };

  addNewBook = e => {
    this.setState({
      books: [...this.state.books, { title: this.state.text, id: Date.now() }],
    });
    console.log(e);
  };

  render() {
    const { books, photos } = this.state;
    const { navigate } = this.props.navigation;

    const renderBooks = books.map(book =>
      <BookContainer key={book.id}>
        <BookTouchable onPress={() => navigate('Book')}>
          <BookCover source={defaultFeaturedImage} />
        </BookTouchable>
        <BookTitle placeholder={book.title} />
      </BookContainer>
    );

    return (
      <PortfolioList>
        {renderBooks}
        <BookContainer>
          <AddNewBookTouchable onPress={e => this.addNewBook(e)}>
            <AddBookIcon source={AddButtonSource} resizeMode="contain" />
          </AddNewBookTouchable>
          <BookTitle
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </BookContainer>
      </PortfolioList>
    );
  }
}

export default Portfolio;
