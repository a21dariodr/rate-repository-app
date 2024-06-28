import { gql } from '@apollo/client'
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy! = CREATED_AT
    $orderDirection: OrderDirection! = DESC
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`

export const GET_USERS = gql`
  query {
    users {
      edges {
        node {
          username
        }
      }
    }
  }
`

export const GET_LOGGED_USER = gql`
  query getLoggedUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`