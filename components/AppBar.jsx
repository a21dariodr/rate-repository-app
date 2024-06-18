import { View, StyleSheet } from 'react-native';
import Tab from './Tab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundColorTopbar
  },
});

const AppBar = () => {
  return <View style={styles.container}>
      <Tab title={'Repositories'} link={'/'} />
      <Tab title={'Sign in'} link={'/sign-in'} />
    </View>;
};

export default AppBar;