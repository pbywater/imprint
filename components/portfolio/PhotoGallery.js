import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Gallery from 'react-native-gallery';
import styled from 'styled-components/native';

class PhotoGallery extends Component {
  startTimer = () => {
    const currentTime = Date.now();
  };
  render() {
    const { books } = this.props;
    const photos = books.map(book => book.photos)
    return (
      <Gallery
        style={{ flex: 1, backgroundColor: 'white' }}
        images={photos}
        onPageSelected={() => this.startTimer()}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(PhotoGallery);
