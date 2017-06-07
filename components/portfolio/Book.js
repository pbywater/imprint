import React, { Component } from 'react';
import {
  Image,
  CameraRoll,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImagePickerIOS
} from 'react-native';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
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
    flexWrap: 'wrap'
  }
});

class Book extends Component {
  state = {
    photos: []
  };

  getPhotos() {
    CameraRoll.getPhotos({
      first: 20
    }).then(res => this.setState({ photos: res.edges }));
  }

  addPhoto = () => {
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        const photo = {
          node: {
            image: {
              uri: imageUri
            }
          }
        };
        this.setState({ photos: [...this.state.photos, photo] });
      },
      error => console.error(error)
    );
  };

  componentDidMount() {
    //this.getPhotos();
  }

  render() {
    const { photos } = this.state;
    console.log(photos);
    const renderPhotos = photos.map(photo => {
      return (
        <TouchPhoto url={photo.node.image.uri} key={photo.node.image.uri}>
          <Photo
            key={photo.node.image.uri}
            source={{ uri: photo.node.image.uri }}
          />
        </TouchPhoto>
      );
    });

    return (
      <BookContainer contentContainerStyle={styles.center}>
        {renderPhotos}
        <AddPhotosButton onPress={this.addPhoto}>
          <AddBookIcon source={AddButtonSource} resizeMode="contain" />
        </AddPhotosButton>
      </BookContainer>
    );
  }
}

export default Book;
