import RNPickerSelect from 'react-native-picker-select'

const OrderMenu = ({ refetch }) => {
  const orderOptions = [
    { label: 'Latest repositories', value: 'Latest repositories' },
    { label: 'Oldest repositores', value: 'Oldest repositores' },
    { label: 'Higuest rated repositories', value: 'Higuest rated repositories' },
    { label: 'Lowest rated repositories', value: 'Lowest rated repositories' }
  ]

  const handleOrderChange = order => {
    switch (order) {
      case 'Latest repositories':
        refetch({
          orderBy: "CREATED_AT",
          orderDirection: "DESC"
        })
        break
      case 'Oldest repositores':
        refetch({
          orderBy: "CREATED_AT",
          orderDirection: "ASC"
        })
        break
      case 'Higuest rated repositories':
        refetch({
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC"
        })
        break
      case 'Lowest rated repositories':
        refetch({
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC"
        })
    }
  }

  return (
    <RNPickerSelect
      onValueChange={(value) => handleOrderChange(value)} 
      items={orderOptions}
      placeholder={{}}/>
  )
}

export default OrderMenu