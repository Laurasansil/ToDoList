import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View key={props.index} style={styles.goalItem}>
      <Pressable
        android_ripple={{ backgroundColor: "#b35d10" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#ff9434",
  },
  pressedItem: {
    backgroundColor: "#b35d10",
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
