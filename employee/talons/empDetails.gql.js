import { gql } from '@apollo/client';
import {} from '@apollo/client';

export const EMP_SEARCH = gql`
    {
        getEmployees {
            contact_no
            dob
            emp_name
            emp_no
            id_column
        }
    }
`;
export default EMP_SEARCH;
