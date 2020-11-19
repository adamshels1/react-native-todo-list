import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'


class App extends Component {

  state = {
    value: '',
    items: []
  }


  onAddItem = () => {
    const { value, items } = this.state;
    if (!value) return;
    this.setState({
      items: [...items, { type: 'new', title: value }],
      value: ''
    })
  }

  onDeleteItem = (item, itemKey) => {
    const items = this.state.items.filter((i, key) => key !== itemKey);
    this.setState({ items })
  }

  onComplete = (item, itemKey) => {
    const items = this.state.items.map((i, key) => {
      if (key === itemKey) {
        const type = i.type === 'new' ? 'completed' : 'new';
        return { ...i, type };
      }
      return i;
    })
    this.setState({ items })
  }

  renderItem = (item, key) => {
    if (item.type === 'completed') return (
      <TouchableOpacity
        key={key}
        onPress={() => this.onComplete(item, key)}
        style={styles.itemCompletedWrap}
      >
        <View style={styles.itemLeftWrap}>
          <FontAwesomeIcon icon={faCheck} size={19} style={styles.checkIcon} />
          <Text style={styles.itemTextCompleted}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.onDeleteItem(item, key)}
          style={styles.itemCloseWrap}
        >
          <FontAwesomeIcon icon={faTimes} size={20} color={'#fff'} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
    return (
      <TouchableOpacity
        key={key}
        onPress={() => this.onComplete(item, key)}
        style={styles.itemNewWrap}
      >
        <View style={styles.itemLeftWrap}>
          <Text style={styles.itemTextNew}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.onDeleteItem(item, key)}
          style={styles.itemCloseWrap}
        >
          <FontAwesomeIcon icon={faTimes} size={20} color={'#383838'} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>My To Do List</Text>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Title..."
                value={this.state.value}
                placeholderTextColor="blue"
                style={styles.input}
                onChangeText={value => this.setState({ value })}
              />
              <TouchableOpacity
                onPress={this.onAddItem}
                style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.itemsWrap}>
              {this.state.items.map((item, key) => this.renderItem(item, key))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  itemCompletedWrap: { backgroundColor: '#888', width: '100%', height: 20, marginTop: 10, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
  itemNewWrap: { backgroundColor: '#eee', width: '100%', height: 20, marginTop: 10, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
  itemLeftWrap: { flexDirection: 'row', alignItems: 'center' },
  checkIcon: { color: '#fff', marginLeft: 10 },
  itemTextCompleted: { fontSize: 20, paddingLeft: 10, textDecorationLine: 'line-through', color: '#fff', width: '70%' },
  itemTextNew: { fontSize: 20, paddingLeft: 37, color: '#383838', width: '70%' },
  itemCloseWrap: { height: 50, width: 50, justifyContent: 'center', alignItems: 'center' },
  title: { marginTop: 20, fontSize: 20 },
  inputWrap: { flexDirection: 'row', marginTop: 20, width: 300 },
  itemsWrap: { width: 300 },
  input: { backgroundColor: '#e6e6ff', fontSize: 20, width: 200, paddingLeft: 20 },
  addButton: { width: 100, height: 100, backgroundColor: '#000066', justifyContent: 'center', alignItems: 'center' },
  addButtonText: { color: '#FFF', fontSize: 20 }
});

export default App;
