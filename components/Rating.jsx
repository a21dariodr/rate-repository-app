import { View, StyleSheet } from "react-native"
import Text from "./Text"
import { formatNumber } from "../utils"

const styles = StyleSheet.create({
  container: {
    gap: 5,
    alignItems: 'center'
  }
})

const Rating = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight={'bold'}>
        {formatNumber(value)}
      </Text>
      <Text>{name}</Text>
    </View>
  )
}

export default Rating