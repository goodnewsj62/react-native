import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(item) {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: item.item.id
            });
        }
        return <CategoryGridTile onPress={pressHandler} title={item.item.title} color={item.item.color} />;
    }


    return (
        <FlatList bounces={false}
            data={CATEGORIES}
            keyExtractor={(item) => {
                return item.id;
            }}
            renderItem={
                renderCategoryItem
            }
            numColumns={2}
        />
    )
}

export default CategoriesScreen;