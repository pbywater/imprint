import React, { Component } from 'react';
import {
  Image,
  CameraRoll,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const BookContainer = styled.ScrollView`
  flex: 1;
`;

const Photo = styled.Image`
  width: 200;
  height: 200;
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
    photos: [],
  };

  getPhotos() {
    CameraRoll.getPhotos({
      first: 20,
    }).then(res => this.setState({ photos: res.edges }));
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    const { photos } = this.state;
    console.log(photos);
    const renderPhotos = photos.map(photo => {
      return (
        <Photo
          key={photo.node.image.uri}
          source={{ uri: photo.node.image.uri }}
        />
      );
    });

    return (
      <BookContainer contentContainerStyle={styles.center}>
        {renderPhotos}
      </BookContainer>
    );
  }
}

export default Book;
