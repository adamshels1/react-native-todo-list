/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const Task = ({ name }) => (
  <View style={{ backgroundColor: 'gray', width: '100%', height: 20, marginTop: 10, height: 50, justifyContent: 'center' }}>
    <Text style={{ fontSize: 20, paddingLeft: 20 }}>aaa</Text>
  </View>
);



class App extends Component {


  state = {
    items: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ]
  }



  render() {
    return (
      <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView>
          <Text style={{ marginTop: 20, fontSize: 20 }}>My To Do List</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TextInput
              placeholder="Title..."
              placeholderTextColor="blue"
              style={{ backgroundColor: '#e6e6ff', fontSize: 20, width: 200, paddingLeft: 20 }}
            />
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: '#000066', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontSize: 20 }}>Add</Text>
            </TouchableOpacity>
          </View>

          {this.state.items.map((item, key) => <Task />)}

        </ScrollView>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
});

export default App;
