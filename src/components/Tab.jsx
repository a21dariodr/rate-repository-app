import { Text, StyleSheet } from "react-native"
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

const Tab = ({ title, link }) => {
  return (
    <Link to={link}>
      <Text style={styles.title}>{title}</Text>
    </Link>
  )
}

export default Tab