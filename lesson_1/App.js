import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <View styles={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={
            (itemData) => {
              return (
                <GoalItem itemData={itemData} />
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
