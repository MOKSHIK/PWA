import { useMutation } from '@apollo/client';
import React from 'react';
import { useEffect, useState } from 'react';
import EMP_ADD from '../talons/empAdd.gql';
import { Link } from 'react-router-dom';
const adduser = () => {
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const [addFormData, setAddFormData] = useState({
        emp_no: '',
        emp_name: '',
        dob: '',
        contact_no: ''
    });
    const [runQuery, { called, data, loading, error }] = useMutation(EMP_ADD, {
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'cache-first',
        variables: {
            contactNo: addFormData.contact_no,
            dob: addFormData.dob,
            empName: addFormData.emp_name,
            empNo: addFormData.emp_no
        }
    });

    useEffect(() => {
        if (shouldSubmit) {
            runQuery();
        }
    }, [shouldSubmit]);

    const handleAddFormSubmit = event => {
        event.preventDefault();
        setShouldSubmit(true);
    };
    const handleAddFormChange = event => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    return (
        <div>
            <h2>Add a Employee</h2>
            <form onSubmit={handleAddFormSubmit}>
                <div>
                    <input
                        type="number"
                        name="emp_no"
                        required="required"
                        placeholder="Enter Emp no"
                        onChange={handleAddFormChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="emp_name"
                        required="required"
                        placeholder="Enter Emp name"
                        onChange={handleAddFormChange}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        name="dob"
                        required="required"
                        placeholder="Enter Dob"
                        onChange={handleAddFormChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="contact_no"
                        required="required"
                        placeholder="Enter contact"
                        onChange={handleAddFormChange}
                    />
                </div>
                <button type="submit">ADD USER</button>
            </form>
        </div>
    );
};

export default adduser;
