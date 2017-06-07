import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Gallery from 'react-native-gallery';
import styled from 'styled-components/native';

class PhotoGallery extends Component {
  startTimer = photo => {
    const startTime = Date.now();
    this.props.startTimer(startTime, photo);
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

export default connect(mapStateToProps)(PhotoGallery);
