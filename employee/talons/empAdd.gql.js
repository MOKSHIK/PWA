import { gql, useMutation } from '@apollo/client';

export const EMP_ADD = gql`
    mutation employeeAdd(
        $empNo: Int!
        $empName: String!
        $dob: String!
        $contactNo: Int!
    ) {
        employeeAdd(
            input: {
                empNo: $empNo
                empName: $empName
                dob: $dob
                contactNo: $contactNo
            }
        ) {
            contactNo
            dob
            empName
            empNo
        }
    }
`;
export default EMP_ADD;

// mutation {
//     employeeAdd(input: {}) {
//         contactNo
//         dob
//         empName
//         empNo
//         idColumn
//     }
// }

// mutation employeeAdd($input: array) {
//     employeeAdd(
//         input: {
//             contactNo: $contactNo
//             dob: $dob
//             empName: $empName
//             empNo: $empNo
//             idColumn: $idColumn
//         }
//     )
// }
