import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
    return (

        <View style={styles.wrapper}>
            <Text style={styles.subtitle}>
                {children}
            </Text>
        </View>

    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        padding: 6,
        margin: 4,
    },
    wrapper: {
        marginHorizontal: 18,
        borderBottomWidth: 2,
        borderBottomColor: "#000",
        marginVertical: 8
    }
});