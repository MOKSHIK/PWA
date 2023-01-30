import { useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import EMP_EDIT from '../talons/editEmp.gql';

const EditUser = props => {
    let location = useLocation();
    let history = useHistory();
    let { search } = location;
    const queryParam = new URLSearchParams(search);
    const id_column = queryParam.get('rowId');

    const [shouldSubmit, setShouldSubmit] = useState(false);
    const [addFormData, setAddFormData] = useState({
        emp_no: '',
        emp_name: '',
        dob: '',
        contact_no: ''
    });

    const [runMutation, { data, loading, error }] = useMutation(EMP_EDIT, {
        variables: {
            empNo: addFormData.emp_no,
            empName: addFormData.emp_name,
            dob: addFormData.dob,
            contactNo: addFormData.contact_no,
            idColumn: id_column
        }
    });

    useEffect(() => {
        if (shouldSubmit) {
            runMutation().catch(error => console.log(error));
        }
    }, [shouldSubmit]);

    const handleAddFormSubmit = async event => {
        await event.preventDefault();
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

    const handleButtonClick = async event => {
        await handleAddFormSubmit(event);
        history.push(`/employee.html`);
        window.location.reload();
    };

    return (
        <div>
            <h2>Edit for Employee No {id_column}</h2>
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
            </form>
            <button type="submit" onClick={handleButtonClick}>
                Edit User
            </button>
        </div>
    );
};

export default EditUser;
