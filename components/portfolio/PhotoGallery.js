import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Gallery from 'react-native-gallery';
import styled from 'styled-components/native';

import { endTime, startTime } from './../../redux/actions';

class PhotoGallery extends Component {
  startTimer = photo => {
    console.log('photo', photo);
    const currentTime = Date.now();
    this.props.endTime(currentTime, photo);
    console.log('----->', this.props.selectedPhoto);
    this.props.startTime(currentTime, photo);
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
  const { selectedBook, books, selectedPhoto } = state;
  return {
    books,
    selectedBook,
    selectedPhoto
  };
}

export default connect(mapStateToProps, { startTime, endTime })(PhotoGallery);
