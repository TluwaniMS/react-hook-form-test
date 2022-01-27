import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          name
          isAdmin
          email
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
