import { FlatList, Pressable, View } from 'react-native'
import { useNavigate } from "react-router-native"
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import ItemSeparator from './ItemSeparator'
import OrderMenu from './OrderMenu'
import SearchBar from './SearchBar'

export const RepositoryListContainer = ({ repositories, refetch }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
        <RepositoryItem item={item} />
      </Pressable>}
      ListHeaderComponent={<View style={{ padding: 10 }}>
        <SearchBar refetch={refetch} />
        <OrderMenu refetch={refetch} />
      </View>}
      ListHeaderComponentStyle={{ zIndex: 5 }}
    />
  )
}

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories()

  return <RepositoryListContainer repositories={repositories} refetch={refetch} />
}

export default RepositoryList