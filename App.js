import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// For ScrollView in AlbumList.js, we need to do { flex: 1 } in order to 
// have the scoll to view to the end
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Album'} />
        <AlbumList />
      </View>
    );
  }
}
