import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={[styles.gridItem]}>
            <Pressable onPress={onPress} android_ripple={{ color: "#ccc" }} style={styles.button}>
                <View style={[styles.innerConatiner, { backgroundColor: color }]}>
                    <Text >
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 1,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    innerConatiner: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9
    }
});