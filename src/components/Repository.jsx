import RepositoryItem from "./RepositoryItem"
import { useParams } from "react-router-native"
import useRepository from "../hooks/useRepository"

const Repository = () => {
  const id = useParams().id
  const { repository } = useRepository(id)

  return <RepositoryItem item={repository}  showButton />
}

export default Repository