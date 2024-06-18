import { Text, StyleSheet, Pressable } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  title: {
    color: theme.colors.title,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title,
    paddingVertical: 25,
    paddingHorizontal: 20
  }
})

const Tab = ({ title }) => {
  return (
    <Pressable onPress={() => console.log('Pressable pressed!')}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default Tab