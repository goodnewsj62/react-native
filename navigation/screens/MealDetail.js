import { Text, Image, View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";



const MealDetail = ({ route, navigation }) => {
    const meal = MEALS.filter((item) => item.id === route.params.mealId)[0];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        });
    }, []);


    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <Text style={styles.title}>
                {meal.title}
            </Text>
            <MealDetails
                duration={meal.duration}
                affordability={meal.affordability}
                complexity={meal.complexity}
            />
            <Subtitle>Ingredients</Subtitle>
            {
                <List data={meal.ingredients} />
            }
            <Subtitle>Steps</Subtitle>
            {
                <List data={meal.steps} />
            }
        </ScrollView>
    );
}

export default MealDetail;


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 230
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "center",
        marginHorizontal: 4,
        marginVertical: 8,

    },

});