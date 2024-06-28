import { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"
import { Searchbar } from "react-native-paper"

const SearchBar = ({ refetch }) => {
  const [search, setSearch] = useState('')
  const [searchKeyword] = useDebounce(search, 500)

  useEffect(() => {
    refetch({ searchKeyword })
  }, [searchKeyword])

  return (
    <Searchbar
      placeholder="Search by repository or owner"
      value={search}
      onChangeText={searchInput => setSearch(searchInput)}
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        margin: 7,
        padding: 5
      }}
    />
  )
}

export default SearchBar