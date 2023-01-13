import React from 'react';
import './emp.css';
import { useEmpDetails } from '../talons/useEmpDetails';
import EMP_SEARCH from '../talons/empDetails.gql';
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Inquiry = props => {
    const [runQuery, { called, loading, data, error }] = useLazyQuery(
        EMP_SEARCH,
        {
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first'
        }
    );

    useEffect(() => {
        runQuery();
    }, []);
    const location = useLocation();
    const path = location.pathname + '/adduser.html';
    console.log(location.pathname);
    return (
        <div className="app-container">
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
                        data.getEmployees.map(details => (
                            <tr>
                                <td>{details.id_column}</td>
                                <td>{details.emp_no}</td>
                                <td>{details.emp_name}</td>
                                <td>{details.dob}</td>
                                <td>{details.contact_no}</td>
                                <td>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div>
                <button className="btn-user">
                    <Link to={path}>ADD USER</Link>
                </button>
            </div>
        </div>
    );
};

export default Inquiry;
