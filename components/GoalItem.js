import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: '#343c88' }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={(pressed)=> pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 50,
        backgroundColor: '#5c6bf3',
    },
    pressedItem: {
        opacitu: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
        fontWeight: '700',
        marginLeft: 10,
    },
});