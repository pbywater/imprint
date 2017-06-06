import React, { Component } from 'react';
import { Image, CameraRoll, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Book = styled.View`
  border: palevioletred 1px solid;
  width: 30%;
  height: 30%;
`;

const PortfolioList = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
  flex-wrap: wrap;
`;

class Portfolio extends Component {
  state = {
    photos: [],
    books: [
      { title: 'Outdoors', id: 24758 },
      { title: 'Windsor', id: 31708 },
      { title: 'Burberry', id: 94478 },
      { title: 'Editorial', id: 13456 },
      { title: 'Outdoors', id: 34758 },
      { title: 'Windsor', id: 34708 },
      { title: 'Burberry', id: 34478 },
      { title: 'Editorial', id: 23456 },
      { title: 'Editorial', id: 23496 }
    ]
  };

  getPhotos() {
    CameraRoll.getPhotos({
      first: 20
    }).then(res => this.setState({ photos: res.edges }));
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    const { books, photos } = this.state;

    const renderBooks = books.map(book => (
      <Book key={book.id}>
        <Text>{book.title}</Text>
      </Book>
    ));

    return (
      <PortfolioList>
        {renderBooks}
      </PortfolioList>
    );
  }
}
//{this.state.photos.length > 0 &&
//<Image
//style={{ flex: 1 }}
//source={{ uri: this.state.photos[0].node.image.uri }}
///>}

export default Portfolio;
