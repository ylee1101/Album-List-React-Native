import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("Testing album detail")
    return (
        <Card>
          <CardSection>
            <Text>{this.props.album.title}</Text>
          </CardSection>
        </Card>
    )
  }
}

const styles = StyleSheet.create({});

export default AlbumDetail;
