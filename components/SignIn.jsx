import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { useFormik } from 'formik'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.title,
    padding: 20
  },
  input: {
    padding: 15,
    marginBottom: 10,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: theme.fontSizes.title
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 4
  },
  buttonText: {
    color: theme.colors.title,
    fontWeight: theme.fontWeights.bold
  }
})

const initialValues = {
  username: '',
  password: ''
}

const onSubmit = (values) => {
  console.log(values)
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry 
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn;