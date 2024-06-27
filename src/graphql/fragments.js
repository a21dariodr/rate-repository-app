import { gql } from '@apollo/client'

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    ownerAvatarUrl
    language
    fullName
    description
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    id
  }
`

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repositoryId
    repository {
      fullName
    }
    user {
      id
      username
    }
  }
`