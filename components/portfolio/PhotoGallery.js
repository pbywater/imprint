import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Gallery from 'react-native-gallery';
import styled from 'styled-components/native';

class PhotoGallery extends Component {
  render() {
    const { photos } = this.props.navigation.state.params;
    return (
      <Gallery style={{ flex: 1, backgroundColor: 'white' }} images={photos} />
    );
  }
}

export default PhotoGallery;
