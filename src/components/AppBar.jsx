import { View, StyleSheet, ScrollView } from 'react-native'
import Tab from './Tab'
import theme from '../utils/theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundColorTopbar
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tab title={'Repositories'} link={'/'} />
        <Tab title={'Sign in'} link={'/sign-in'} />
      </ScrollView>
    </View>
  )
}

export default AppBar