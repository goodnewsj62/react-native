import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButtton = ({ children, onPress }) => {

    return (
        
            <View style={styles.outerContainer}>
                <Pressable onPress={onPress} style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>
                        {children}
                    </Text>
                </Pressable>
            </View>
        
    );
}

export default PrimaryButtton; 

const styles =  StyleSheet.create({
    outerContainer: {
        marginHorizontal:  8,
    },
    buttonContainer:{
        backgroundColor:  'blue',
        borderRadius:  28,
        paddingVertical:  8  ,
        paddingHorizontal:  16,
        elevation: 2,
        margin: 4,
    },
    buttonText: {
        color:  "#fff",
        textAlign:  "center"
    }
});