import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGruess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title >
                Opponets choice
            </Title>
            <NumberContainer >{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
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