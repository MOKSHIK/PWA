import { gql, useMutation } from '@apollo/client';

export const EMP_ADD = gql`
    mutation {
        employeeAdd(input: {}) {
            contactNo
            dob
            empName
            empNo
            idColumn
        }
    }
`;
export default EMP_ADD;
