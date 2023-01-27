import { gql, useMutation } from '@apollo/client';

export const EMP_EDIT = gql`
    mutation EmployeeEdit(
        $empNo: Int!
        $empName: String!
        $dob: String!
        $contactNo: String!
        $idColumn: Int!
    ) {
        employeeEdit(
            input: {
                empNo: $empNo
                empName: $empName
                dob: $dob
                contactNo: $contactNo
                idColumn: $idColumn
            }
        ) {
            contactNo
            dob
            empName
            empNo
            idColumn
        }
    }
`;
export default EMP_EDIT;
