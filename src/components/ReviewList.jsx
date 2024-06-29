import { View, FlatList } from "react-native"
import Text from "./Text"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"
import useReviews from "../hooks/useReviews"
import theme from "../utils/theme"

const ReviewList = () => {
  const { reviews, refetch } = useReviews()

  const reviewsNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

  if (reviewsNodes.length === 0) return (
    <View style={{
      backgroundColor: theme.colors.title,
      margin: 5,
      padding: 10,
      textAlign: "center"
    }}>
      <Text>You have no reviews.</Text>
    </View>
  )

  return (
    <FlatList
      data={reviewsNodes}
      renderItem={({ item }) =>
        <ReviewItem review={item} refetch={refetch} currentUserReviews />
      }
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default ReviewList