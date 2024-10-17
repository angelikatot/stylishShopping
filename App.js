import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Appbar, List } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ShoppingListApp() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);


  const addItem = () => {
    if (item.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), key: item }]);
      setItem('');
    }
  };

  // Function to clear the list
  const clearList = () => {
    setTodos([]);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Shopping List" />
        </Appbar.Header>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="Add an item"
            value={item}
            onChangeText={setItem}
            mode="outlined"
          />
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={addItem} style={styles.button}>
              Add
            </Button>
            <Button mode="outlined" onPress={clearList} style={styles.button}>
              Clear
            </Button>
          </View>
        </View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <List.Item title={item.key} style={styles.listItem} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  list: {
    padding: 20,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
