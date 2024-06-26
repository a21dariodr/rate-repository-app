import { Text, Pressable, StyleSheet } from "react-native"
import { Link } from "react-router-native"
import theme from "../utils/theme"

const styles = StyleSheet.create({
  title: {
    color: theme.colors.title,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title,
    paddingVertical: 25,
    paddingHorizontal: 20
  }
})

const Tab = ({ title, link, onPress }) => {
  if (link) {
    return (
      <Link to={link}>
        <Text style={styles.title}>{title}</Text>
      </Link>
    )
  }
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default Tab