import React, { Component } from 'react';
import {
  Image,
  CameraRoll,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { addBook } from './../../redux/actions';
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
  backgroundColor: white;
`;

const BookContainer = styled.View`
  width: 30%;
  height: 30%;
  backgroundColor: white;
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
    text: '',
    photos: [],
    books: [{ title: 'Outdoors', id: 24758 }]
  };

  addNewBook = e => {
    if (this.state.text.length < 3) {
      return;
      //Potentially show a model explaining the error or can also set text
      //state so it shows in the input but is annoying
      //return this.setState({ text: 'You must Input a title' });
    }
    this.props.addBook({ title: this.state.text, id: Date.now(), photos: [] });
    this.setState({ text: '' });
  };

  render() {
    const { books, photos } = this.props;
    const { navigate } = this.props.navigation;

    const renderBooks = books.map(book =>
      <BookContainer key={book.id}>
        <BookTouchable
          onPress={() =>
            book.title.length < 3
              ? addNewBook()
              : navigate('Book', { title: book.title })}
        >
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
            placeholder="Enter A Title"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </BookContainer>
      </PortfolioList>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    books: state.bookData.books
  };
}

export default connect(mapStateToProps, { addBook })(Portfolio);
