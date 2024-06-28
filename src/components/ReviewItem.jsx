import { StyleSheet, View } from "react-native"
import { format } from "date-fns"
import Text from "./Text"
import theme from "../utils/theme"

const ReviewItem = ({ review, showFullName }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: 20,
      backgroundColor: theme.colors.title
    },
    rating: {
      borderColor: theme.colors.primary,
      borderWidth: 2,
      width: 50,
      height: 50,
      borderRadius: 100,
      marginRight: 10,
      paddingTop: 14,
      textAlign: "center",
    },
    detailsView: {
      flex: 1,
    },
    content: {
      marginTop: 5,
    }
  })

  return (
    <View style={styles.container}>
      <Text color="primary" fontWeight="bold" style={styles.rating}>
        {review.rating}
      </Text>
      <View style={styles.detailsView}>
        <Text fontWeight="bold">{showFullName ? review.repository.fullName : review.user.username}</Text>
        <Text color="secondary">
          {format(new Date(review.createdAt), "dd.mm.yyyy")}
        </Text>
        <Text style={styles.content}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem