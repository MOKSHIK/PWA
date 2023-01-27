import { gql } from '@apollo/client';

export const EMPLOYEE_DELETE = gql`
    mutation employeeDelete($idColumn: Int!) {
        employeeDelete(input: { idColumn: $idColumn }) {
            idColumn
        }
    }
`;

export default EMPLOYEE_DELETE;
