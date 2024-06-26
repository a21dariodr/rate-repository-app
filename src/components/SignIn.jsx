import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../utils/theme'
import { useFormik } from 'formik'
import * as yup from 'yup'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.title,
    padding: 20
  },
  input: {
    padding: 15,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: theme.fontSizes.title
  },
  inputError: {
    color: theme.colors.error,
    marginTop: 5,
    marginBottom: 10,
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
  },
  marginBottom: {
    marginBottom: 10
  },
  redBorder: {
    borderColor: theme.colors.error
  }
})

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const onSubmit = (values) => {
  console.log(values)
}

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.errors.username && styles.redBorder,
          !formik.errors.username && styles.marginBottom
        ]}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.inputError}>{formik.errors.username}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          formik.errors.password && styles.redBorder,
          !formik.errors.password && styles.marginBottom
        ]}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry 
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.inputError}>{formik.errors.password}</Text>
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn