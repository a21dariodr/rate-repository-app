import RepositoryItem from "./RepositoryItem"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"
import { useParams } from "react-router-native"
import useRepository from "../hooks/useRepository"
import { FlatList } from "react-native"

const SingleRepository = () => {
  const id = useParams().id
  const { repository } = useRepository(id)

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository}  showButton />}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default SingleRepository