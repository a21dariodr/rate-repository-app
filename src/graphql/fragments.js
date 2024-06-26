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
  }
`