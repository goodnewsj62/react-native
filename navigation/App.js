import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategory' component={CategoriesScreen} options={{
            title: "All Categories",
            headerStyle: { backgroundColor: '#1e90ff' },
            headerTintColor: "#fff",
          }} />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
          <Stack.Screen name='MealDetail' component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({

});
