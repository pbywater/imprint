import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

const font = css`font-family: Helvetica;`;
const centering = css`
  display: flex;
  align-items: center;
  justify-content: center;`;

export const GeneralButton = styled.TouchableOpacity`
  width: 110;
  height: 50;
  background-color: #F44243;
  ${centering};
  margin:10%;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-style: italic;
  font-weight: 700;
  font-size: 20;
  color: white;
  padding: 2%;
`;

export const SelectOption = styled.View`
width: 110;
height:30;
border: 1px solid white;
${centering}
margin: 10%;
`;

export const AddBookIcon = styled.Image`
 flex: 0.5;
 width: 30%;
 height: auto;
`;

export const AddBookTouchable = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 30%;
height: 30%;
background-color: #38384E;
`;
