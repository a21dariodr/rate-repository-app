import { useQuery } from "@apollo/client"
import { GET_LOGGED_USER } from "../graphql/queries"

const useReviews = () => {
  const { data, refetch } = useQuery(GET_LOGGED_USER, {
    variables: { includeReviews: true },
  })

  return {
    reviews: data?.me.reviews,
    refetch,
  }
}

export default useReviews