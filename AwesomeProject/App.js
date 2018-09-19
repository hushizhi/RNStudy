import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'blue'}} />
      </View>
    );
  }
};
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

// AppRegistry.registerComponent('FixedDimensionsBasics', () => FixedDimensionsBasics);