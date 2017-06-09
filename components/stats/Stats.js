import React, { Component } from 'react';
import { Text, View, Image, ScrollView, ListView } from 'react-native';
import styled from 'styled-components/native';
import Book from '../portfolio/Book';
import { connect } from 'react-redux';

const StatsImage = styled.Image`
  flex: 2;
  height: 300;
  margin-bottom: 5%;
  margin-left: 5%;
`;

const StatsContainer = styled.View`
  width: 100%;
  margin-bottom: 5%;
`;

const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5%;
`;

const PhotoStats = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const BookTitle = styled.Text`
  font-size: 30;
  font-family: Helvetica;
  margin-bottom: 3%;
  margin-left: 5%;
`;

const StatData = styled.Text`
  font-size: 25;
  font-weight: 800;
  margin-left: 5%;
`;

const StatList = styled.View`
  width: 100%;
  height: 10%;
`;

class Stats extends Component {
  render() {
    const renderStats = array => {
      return array.map((data, index) =>
        <StatList key={index}>
          <StatData>{('' + data / 1000).slice(0, -2) + 's'}</StatData>
        </StatList>
      );
    };
    const books = this.props.state.bookData.books;
    const bookStats = books.map((book, idx) =>
      <StatsContainer key={idx}>
        <BookTitle>{book.title}</BookTitle>
        {book.photos.length > 0
          ? book.photos.map((photo, index) =>
              <RowContainer key={index}>
                <StatsImage source={{ uri: photo.uri }} />
                <PhotoStats>
                  {renderStats(photo.dwellTimes)}
                </PhotoStats>
              </RowContainer>
            )
          : <Text style={{ textAlign: 'center', fontSize: 24 }}>
              Add some photos to your portfolios in the Portfolio tab
            </Text>}
      </StatsContainer>
    );
    return <ScrollView style={{ marginTop: 70 }}>{bookStats}</ScrollView>;
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Stats);
