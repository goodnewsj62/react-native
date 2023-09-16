import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)

  };
  function addGoalHandler() {
    setCourseGoals((state) => ([...state, { text: enteredGoal, key: Math.random().toString() }]));
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View styles={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={
            (itemData) => {
              return (
                <View>
                  <Text style={styles.goalItem} >
                    {itemData.item.text}
                  </Text  >

                </View>
              )
            }
          }

        />
        {/* <FlatList data={courseGoals}

          renderItem={
            (itemData) => {
              return <Text style={styles.goalItem}>{itemData.item.text}</Text>
            }
          }
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 10,

  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ced4da",
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  }
});
