import { gql } from '@apollo/client'
import { REPOSITORY_DETAILS } from './fragments'

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      repository {
        ...RepositoryDetails
      }
      user {
        id
        username
      }
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
  ${REPOSITORY_DETAILS}
`