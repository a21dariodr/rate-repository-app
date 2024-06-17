import { Text, View, StyleSheet, Image } from "react-native"
import theme from "../theme";
import { formatNumber } from "../utils";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexGap: {
    gap: 20
  },
  flexGapSmall: {
    gap: 10
  },
  flexGapTiny: {
    gap: 5
  },
  flexGapBig: {
    gap: 50
  },
  flexAlignStart: {
    alignItems: 'flex-start'
  },
  flexAlignCenter: {
    alignItems: 'center'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  marginTop: {
    marginTop: 20
  },
  badge: {
    backgroundColor: theme.color.primary,
    color: 'white',
    padding: 5,
    borderRadius: 4
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.flexGap]}>
        <Image
          style={styles.image}
          source={{
          uri: item.ownerAvatarUrl,
        }}/>
        <View style={[styles.flexGapSmall, styles.flexAlignStart]}>
          <Text style={styles.fontBold}>{item.fullName}</Text>
          <Text >{item.description}</Text>
          <Text style={styles.badge}>{item.language}</Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.flexGapBig, styles.marginTop]}>
        <View style={[styles.flexGapTiny, styles.flexAlignCenter]}>
          <Text style={styles.fontBold}>
              {formatNumber(item.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={[styles.flexGapTiny, styles.flexAlignCenter]}>
          <Text style={styles.fontBold}>
            {formatNumber(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={[styles.flexGapTiny, styles.flexAlignCenter]}>
          <Text style={styles.fontBold}>
            {formatNumber(item.ratingAverage)}
          </Text>
          <Text>Rating</Text>
        </View>
        <View style={[styles.flexGapTiny, styles.flexAlignCenter]}>
          <Text style={styles.fontBold}>
            {formatNumber(item.reviewCount)}
          </Text>
          <Text>Reviews</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem