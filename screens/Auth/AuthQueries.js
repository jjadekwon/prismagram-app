import { gql } from "apollo-boost";

export const LOG_IN = gql`
    mutation logIn($email: String!) {
        requestSecret(email: $email)
    }
`;
