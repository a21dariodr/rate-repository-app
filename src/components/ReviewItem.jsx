import { StyleSheet, View, Pressable, Alert } from "react-native"
import Text from "./Text"
import { format } from "date-fns"
import { Link } from "react-router-native"
import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"
import theme from "../utils/theme"

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.title,
    padding: 20,
  },
  container: {
    flexDirection: "row",
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 15
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
  },
  button: {
    flexGrow: 1,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 4
  },
  viewButton: {
    backgroundColor: theme.colors.primary
  },
  deleteButton: {
    backgroundColor: theme.colors.error
  }
})

const ReviewItem = ({ review, refetch, currentUserReviews }) => {
  const [deleteReview] = useMutation(DELETE_REVIEW)

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          style: "cancel",
        },
        {
          text: "DELETE",
          onPress: async () => {
            await deleteReview({ variables: { id: review.id } })
            refetch({ includeReviews: true })
          }
        }
      ]
    )
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text color="primary" fontWeight="bold" style={styles.rating}>
          {review.rating}
        </Text>
        <View style={styles.detailsView}>
          <Text fontWeight="bold">{currentUserReviews ? review.repository.fullName : review.user.username}</Text>
          <Text color="secondary">
            {format(new Date(review.createdAt), "dd.mm.yyyy")}
          </Text>
          <Text style={styles.content}>{review.text}</Text>
        </View>
      </View>
      {currentUserReviews && (
        <View style={[styles.buttonsContainer]}>
          <Link
            to={`/repository/${review.repositoryId}`}
            style={[styles.button, styles.viewButton]}
          >
            <Text style={{ color: "white" }} fontWeight={"bold"}>
              View repository
            </Text>
          </Link>
          <Pressable
            onPress={handleDelete}
            style={[styles.button, styles.deleteButton]}
          >
            <Text style={{ color: "white" }} fontWeight={"bold"}>
              Delete repository
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default ReviewItem