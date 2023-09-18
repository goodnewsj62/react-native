import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate("MealDetail", { mealId: id });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: "#ccc" }} onPress={pressHandler}>
                <View >
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <MealDetails affordability={affordability} duration={duration} complexity={complexity} />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 2
    },
    image: {
        width: "100%",
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 4,
    },

});