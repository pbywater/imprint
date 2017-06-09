import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Gallery from 'react-native-gallery';
import styled from 'styled-components/native';

import { saveTime } from './../../redux/actions';

class PhotoGallery extends Component {
  //TODO use the library's on page selected method which returns the index of
  //the photo to find the photo then do some timing stuff??
  startTimer = photo => {
    const currentTime = Date.now();
    this.props.saveTime(currentTime, photo);
  };

  render() {
    const { books, selectedBook } = this.props;
    const { photos } = books.find(book => selectedBook === book.title);
    const images = books.photos.map(photo => photo.uri);
    console.log('images', images);
    return (
      <Gallery
        style={{ flex: 1, backgroundColor: 'white' }}
        images={images}
        onPageSelected={index => this.startTimer(photos[index])}
      />
    );
  }
}

function mapStateToProps(state) {
  const { selectedBook, bookData } = state;
  return {
    books: bookData.books,
    selectedBook,
  };
}

export default connect(mapStateToProps, { saveTime })(PhotoGallery);
