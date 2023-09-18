import { Text, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverview = ({ route, navigation }) => {
    const cardId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealsItem) => {
        return mealsItem.categoryIds.indexOf(cardId) >= 0;
    });



    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === cardId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [cardId, navigation]);


    function renderMealItem(itemData) {
        const item = itemData.item
        return <MealItem
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
        />;
    }

    return (
        <View>
            <FlatList
                data={displayedMeals}
                renderItem={
                    renderMealItem
                }
                keyExtractor={
                    (item) => item.id
                }
            />
        </View>
    );
}

export default MealsOverview;