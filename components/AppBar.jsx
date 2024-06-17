import { View, StyleSheet } from 'react-native';
import Tab from './Tab';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.color.backgroundColor
  },
});

const AppBar = () => {
  return <View style={styles.container}>
      <Tab title={'Repositories'} />
    </View>;
};

export default AppBar;