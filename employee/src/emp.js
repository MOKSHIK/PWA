import React from 'react';
import './emp.css';
import EMP_SEARCH from '../talons/empDetails.gql';
import EMPLOYEE_DELETE from '../talons/empDelete.gql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Link, useLocation, useHistory, Route } from 'react-router-dom';
import editUser from './edituser';

const Inquiry = props => {
    let history = useHistory();
    let location = useLocation();
    const [runQuery, { called, loading, data, error }] = useLazyQuery(
        EMP_SEARCH,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            variables: {
                sortOrder: 1,
                current_Page: 1,
                pageSize: 20
            }
        }
    );

    useEffect(() => {
        runQuery();
    }, []);
    // const memoizedEmployees = useMemo(() => {
    //     if (!data) return [];
    //     return data.getEmployees;
    // }, [data]);
    // const [deleteEmployee, { result }] = useLazyQuery(EMPLOYEE_DELETE, {
    //     fetchPolicy: 'no-cache',
    //     nextFetchPolicy: 'cache-first'
    // });
    const [deleteEmployee, { result }] = useMutation(EMPLOYEE_DELETE, {
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'cache-first'
    });

    const handleDeleteClick = id_column => {
        deleteEmployee({
            variables: { idColumn: id_column },
            refetchQueries: [{ query: EMP_SEARCH }]
        });
    };

    const handleEditClick = id_column => {
        history.push(`${location.pathname}/edituser.html?rowId=${id_column}`);
    };
    const handleAddClick = () => {
        history.push(`${location.pathname}/adduser.html`);
    };

    return (
        <div className="app-container">
            {loading && <div className="loading-spinner" />}
            <table>
                <thead>
                    <tr>
                        <th>id_Coloumn</th>
                        <th>emp_No</th>
                        <th>emp_Name</th>
                        <th>dob</th>
                        <th>contact_No</th>
                        <th>OPS</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.getEmployees.employee.map(details => (
                            <tr key={details.id_column}>
                                <td>{details.id_column}</td>
                                <td>{details.emp_no}</td>
                                <td>{details.emp_name}</td>
                                <td>{details.dob}</td>
                                <td>{details.contact_no}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleEditClick(details.id_column)
                                        }
                                    >
                                        <h6>Edit</h6>
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteClick(details.id_column)
                                        }
                                    >
                                        <h6>Delete</h6>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div>
                <button className="btn-user" onClick={handleAddClick}>
                    ADD USER
                </button>
            </div>
        </div>
    );
};

export default Inquiry;
