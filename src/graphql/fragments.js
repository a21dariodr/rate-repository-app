import { gql } from '@apollo/client'

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repositories {
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