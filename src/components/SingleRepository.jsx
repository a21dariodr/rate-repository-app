import RepositoryItem from "./RepositoryItem"
import ReviewItem from "./ReviewItem"
import ItemSeparator from "./ItemSeparator"
import { useParams } from "react-router-native"
import useRepository from "../hooks/useRepository"
import { FlatList } from "react-native"

const SingleRepository = () => {
  const id = useParams().id
  const { repository, fetchMore } = useRepository(id, { first: 5 })

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : []

    const onEndReach = () => {
      fetchMore()
    }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository}  showButton />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository