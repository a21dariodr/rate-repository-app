import { View, StyleSheet } from "react-native"
import theme from "../utils/theme"
import AvatarImage from "./Image"
import Rating from "./Rating"
import Text from "./Text"

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.title,
    padding: 20
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 20
  },
  columnInfoContainer: {
    gap: 10,
    alignItems: 'flex-start'
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 50,
    marginTop: 20
  },
  badge: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.title,
    padding: 5,
    borderRadius: 4
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.mainContainer}>
      <View style={styles.infoContainer}>
        <AvatarImage imageUrl={item.ownerAvatarUrl} />
        <View style={styles.columnInfoContainer}>
          <Text fontWeight={'bold'}>{item.fullName}</Text>
          <Text >{item.description}</Text>
          <Text style={styles.badge}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Rating name={'Forks'} value={item.forksCount} />
        <Rating name={'Stars'} value={item.stargazersCount} />
        <Rating name={'Rating'} value={item.ratingAverage} />
        <Rating name={'Reviews'} value={item.reviewCount} />
      </View>
    </View>
  )
}

export default RepositoryItem