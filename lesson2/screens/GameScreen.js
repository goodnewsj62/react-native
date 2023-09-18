import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButtton from '../components/ui/PrimaryButtton';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGruess] = useState(initialGuess);

    function nextGuestHandler(direction) {
        if (direction === 'lower' && currentGuess < userNumber5) {
            maxBoundary = currentGuess;

        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    }


    return (
        <View style={styles.screen}>
            <Title >
                Opponets choice
            </Title>
            <NumberContainer >{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButtton onPress={nextGuestHandler.bind(this, "lower")} >-</PrimaryButtton>
                    <PrimaryButtton onPress={nextGuestHandler.bind(this, "greater")} >+</PrimaryButtton>
                </View>
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    );
}


export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})