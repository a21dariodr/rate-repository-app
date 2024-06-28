import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import Text from './Text'
import { useNavigate } from 'react-router-native'
import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'
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
  owner: '',
  repository: '',
  rating: null,
  review: ''
}

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Owner username is required'),
  repository: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Minimum rating value is 0')
    .max(100, 'Maximum rating value is 100'),
  review: yup
    .string()
})

export const CreateReviewContainer = ({ onSubmit }) => {
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
          formik.errors.owner && styles.redBorder,
          !formik.errors.owner && styles.marginBottom
        ]}
        placeholder='Repository owner name'
        value={formik.values.owner}
        onChangeText={formik.handleChange('owner')}
      />
      {formik.touched.owner && formik.errors.owner && (
        <Text style={styles.inputError}>{formik.errors.owner}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          formik.errors.repository && styles.redBorder,
          !formik.errors.repository && styles.marginBottom
        ]}
        placeholder='Repository name'
        value={formik.values.repository}
        onChangeText={formik.handleChange('repository')}
      />
      {formik.touched.repository && formik.errors.repository && (
        <Text style={styles.inputError}>{formik.errors.repository}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          formik.errors.rating && styles.redBorder,
          !formik.errors.rating && styles.marginBottom
        ]}
        placeholder='Rating between 0 and 100'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.inputError}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={[styles.input, styles.marginBottom]}
        placeholder='Review'
        value={formik.values.review}
        onChangeText={formik.handleChange('review')}
        multiline
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
}

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW, {
    onError: (e) => window.alert(e),
  })
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { owner, repository, rating, review } = values
    try {
      const newReview = await createReview({
        variables: {
          review: { 
            ownerName: owner,
            repositoryName: repository,
            rating: Number(rating),
            text: review 
          }
        }
      })
      navigate(`/repository/${newReview.data.createReview.repositoryId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return <CreateReviewContainer onSubmit={onSubmit} />
}

export default CreateReview