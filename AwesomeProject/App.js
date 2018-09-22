import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        >
        <Text style={{fontSize: 35}}> hello world! </Text>
        <Image source={require('./q.png')} />
        <Text style={{fontSize: 30}}> ScrollView mp plz </Text>
        <Image source={require('./q.png')} />
        <Text style={{fontSize: 30}}> ScrollView mp zhong </Text>
        <Image source={require('./q.png')} />
        <Image source={require('./q.png')} />
        <Text style={{fontSize: 30}}> ScrollView mp xia </Text>
        <Image source={require('./q.png')} />
        <Image source={require('./q.png')} />
      </ScrollView>
    );
  }
}
