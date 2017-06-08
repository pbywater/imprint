import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  CameraRoll,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImagePickerIOS,
} from 'react-native';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { addPhoto, selectBook } from './../../redux/actions';
import { AddBookIcon, AddBookTouchable } from '../styles/BaseStyles.js';
import AddButtonSource from './../../assets/add-button.png';

const { width, height } = Dimensions.get('window');

const BookContainer = styled.ScrollView`
  flex: 1;
`;

const Photo = styled.Image`
  flex: 1;
`;

const TouchPhoto = styled(TouchableOpacity)`
  width: ${width / 3};
  height: ${height / 3};
`;

const AddPhotosButton = styled(AddBookTouchable)`
  width: ${width / 3};
  height: ${height / 3};
`;

const styles = StyleSheet.create({
  center: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

class Book extends Component {
  state = {
    error: '',
  };

  addPhoto = bookTitle => {
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        this.props.addPhoto(bookTitle, imageUri);
      },
      error => {
        console.log('error', error);
        return this.setState({ error });
      }
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { title } = this.props.navigation.state.params;
    //Only renders photos for the correct book
    const { photos } = this.props.books.find(book => book.title === title);
    const renderPhotos = photos.map((photo, index) => {
      return (
        <TouchPhoto
          key={index}
          onPress={() => {
            this.props.selectBook(title);
            navigate('Gallery', { title });
          }}
        >
          <Photo source={{ uri: photo }} />
        </TouchPhoto>
      );
    });

    return (
      <BookContainer contentContainerStyle={styles.center}>
        {renderPhotos}
        <AddPhotosButton onPress={() => this.addPhoto(title)}>
          <AddBookIcon source={AddButtonSource} resizeMode="contain" />
        </AddPhotosButton>
      </BookContainer>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}
export default connect(mapStateToProps, { addPhoto, selectBook })(Book);
