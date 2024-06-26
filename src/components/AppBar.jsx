import { View, StyleSheet, ScrollView } from 'react-native'
import Tab from './Tab'
import theme from '../utils/theme'
import { useNavigate } from 'react-router-native'
import useAuthStorage from '../hooks/useAuthStorage'
import { useQuery, useApolloClient } from '@apollo/client'
import { GET_LOGGED_USER } from '../graphql/queries'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundColorTopbar
  },
})

const AppBar = () => {
  const { data } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: 'cache-and-network',
  })
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const signOut = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate("/")
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tab title={'Repositories'} link={'/'} />
        {data?.me ? (
          <>
            <Tab title={'Sign out'} onPress={signOut} />
          </>
        )  : (
          <>
            <Tab title={'Sign in'} link={'/sign-in'} />
          </>
        )}
        
      </ScrollView>
    </View>
  )
}

export default AppBar