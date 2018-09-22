// // FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。

// // FlatList更适于长列表数据，且元素个数可以增删。和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。

// // FlatList组件必须的两个属性是data和renderItem。data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//        <FlatList
//         data={[
//           {key: 'anihsahjf djs'},
//           {key: 'bs afds afdsa'},
//           {key: 'c dsaf dsa fds'},
//           {key: 'd sdaf dsa ffds'},
//           {key: 'g afd afd fs dafs'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}> {item.key}</Text>}
//       />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })


// 如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么SectionList将是个不错的选择.
import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList 
          sections={[
            {title: 'D', data:['sdfsdDecbin']},
            {title: 'D', data:['Decbsadfdsin']},
            {title: 'D', data:['Decsdfsdbin']},
            {title: 'G', data:['hsdajf','shdaf','hsdjvh','dsfdsavd','sddsafdsf','sdafdsfadsa']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})