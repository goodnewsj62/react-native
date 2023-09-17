import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


const NumberContainer = ({ children }) => {
    return (
        <View styles={styles.container}>
            <Text style={styles.numberText} >
                {children}
            </Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.aaccent,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignContent: "center",
        alignItems: "center"
    },
    numberText: {
        color: Colors.aaccent,
        fontSize: 36,
        fontWeight: "bold"
    }
})