import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album;
    const { imageStyle, headerTextStyle, thumbanailStyle, headerContentStyle, thumbnailContainerStyle } = styles
    // console.log("Testing album detail", this.props.album);
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image 
              source={{ uri: thumbnail_image }}
              style={thumbanailStyle} 
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image 
            style={imageStyle} 
            source={{ uri: image }} 
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
            <Text>
              Buy Now
            </Text>
          </Button>  
        </CardSection>
      </Card> 
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbanailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
