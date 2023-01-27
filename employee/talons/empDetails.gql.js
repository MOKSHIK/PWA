import { gql } from '@apollo/client';
import {} from '@apollo/client';

export const EMP_SEARCH = gql`
    query GetEmployees($sortOrder: Int!, $current_Page: Int!, $pageSize: Int!) {
        getEmployees(
            sortOrder: $sortOrder
            current_Page: $current_Page
            pageSize: $pageSize
        ) {
            employee {
                contact_no
                dob
                emp_name
                emp_no
                id_column
            }
            total_count
            total_pages
        }
    }
`;
export default EMP_SEARCH;
