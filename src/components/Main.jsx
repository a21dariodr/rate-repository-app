import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import AppBar from './AppBar'
import SingleRepository from './SingleRepository'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import CreateReview from './CreateReview'
import theme from '../utils/theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundColorMain
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path='/create-review' element={<CreateReview />} />
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>
    </View>
  )
}

export default Main