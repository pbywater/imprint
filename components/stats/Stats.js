import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Book from '../portfolio/Book';
import { connect } from 'react-redux';

const StatsImage = styled.Image`
  flex: 2;
  height: 300;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const StatsContainer = styled.View`
  width: 100%;
  margin: 5%;
`;

const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const PhotoStats = styled.Text`
  flex: 1;
  margin-left: 50;
  margin-top: 5%;
`;

const BookTitle = styled.Text`
  font-size: 30;
  font-family: Helvetica;
  color: #38384E;
`;

class Stats extends Component {
  render() {
    const books = this.props.state.bookData.books;
    console.log('books in stats is ', books);
    const bookStats = books.map(book =>
      <StatsContainer>
        <BookTitle>{book.title}</BookTitle>
        {book.photos.length > 0
          ? book.photos.map(photo =>
              <RowContainer>
                <StatsImage source={{ uri: photo.uri }} />
                <PhotoStats>DATA HERE</PhotoStats>
              </RowContainer>
            )
          : <Text>
              Add some photos to your portfolios in the Portfolio tab
            </Text>}
      </StatsContainer>
    );
    return <ScrollView>{bookStats}</ScrollView>;
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Stats);
