import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButtton from "../components/ui/PrimaryButtton";
import { useState } from "react";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');


    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }



    function confirmInputHandler() {
        const chooseNumber = parseInt(enteredNumber);

        if (Number.isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert("Inavlid number", "Number has to be a number between 1 and 99", [
                { text: "Ok", style: 'destructive', onPress: resetInputHandler }
            ]);
            return;
        }

        onPickNumber(chooseNumber);
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.btnView}>
                <View style={styles.btnContainer}>
                    <PrimaryButtton onPress={resetInputHandler} >Reset</PrimaryButtton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButtton onPress={confirmInputHandler}  >Confirm</PrimaryButtton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        maxHeight: 180,
        alignItems: "center",
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 10,
        marginTop: 100,
        backgroundColor: "#72063c",
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: 'center'
    },
    btnView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    btnContainer: {
        flex: 1,

    }
});