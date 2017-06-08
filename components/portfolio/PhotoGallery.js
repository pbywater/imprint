import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Gallery from 'react-native-gallery';
import styled from 'styled-components/native';

import { timeUser } from './../../redux/actions';

class PhotoGallery extends Component {
  //TODO use the library's on page selected method which returns the index of
  //the photo to find the photo then do some timing stuff??
  startTimer = photo => {
    const startTime = Date.now();
    this.props.timeUser(startTime, photo);
  };
  render() {
    const { books, selectedBook } = this.props;
    const { photos } = books.find(book => selectedBook === book.title);
    return (
      <Gallery
        style={{ flex: 1, backgroundColor: 'white' }}
        images={photos}
        onPageSelected={index => this.startTimer(photos[index])}
      />
    );
  }
}

function mapStateToProps(state) {
  const { selectedBook, books } = state;
  return {
    books,
    selectedBook
  };
}

export default connect(mapStateToProps, { timeUser })(PhotoGallery);
