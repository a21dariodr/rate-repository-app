import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import { useNavigate } from 'react-router-native'
import useSignIn from '../hooks/useSignIn'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'
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
  password: '',
  passwordConfirm: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Minimum length is 5 characters')
    .max(30, 'Maximum length is 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Minimum length is 5 characters')
    .max(50, 'Maximum length is 50 characters'),
  passwordConfirm: yup
    .string()
    .required('Password confirm is required')
    .oneOf([yup.ref('password'), ''])
})

const SignUpContainer = ({ onSubmit }) => {
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

      <TextInput
        style={[
          styles.input,
          formik.errors.passwordConfirm && styles.redBorder,
          !formik.errors.passwordConfirm && styles.marginBottom
        ]}
        placeholder='Password confirmation'
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange('passwordConfirm')}
        secureTextEntry 
      />
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <Text style={styles.inputError}>{formik.errors.passwordConfirm}</Text>
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  )
}

const SignUp = () => {
  const [signUp] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      await signUp({ variables: { user: { username, password } } })
      await signIn({ username, password })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp