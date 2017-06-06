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

const { width, height } = Dimensions.get('window');

const BookContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: solid 1px blue;
  flex-wrap: wrap;
`;

const Photo = styled.Image`
  border: solid 1px red;
  flex: 1;
  ${/* width: ${width / 3};
  height: ${height / 2}; */ ''}
  width: 200;
  height: 200;
`;

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
      return <Photo source={{ uri: photo.node.image.uri }} />;
    });

    return (
      <BookContainer>
        {renderPhotos}
      </BookContainer>
    );
  }
}

export default Book;
