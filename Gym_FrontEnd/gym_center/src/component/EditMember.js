import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar'
import axios from "axios";
import ReactDatePicker from 'react-datepicker';

const EditMember = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [member, setMember] = useState({
        name: "",
        start_Date: "",
        end_Date: "",
        phone_Number: ""
    });

    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');

    const { name, start_Date, end_Date, phone_Number } = member;

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9090/api/member/${id}`);
        setMember(result.data);
    };

    const onInputChange = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        await axios.put(`http://localhost:9090/api/member/${id}`, member);
        navigate("/getMember");
    };

    useEffect(() => {
        loadUser();
    }, []);

    const formatDate = dateString => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div style={{ backgroundColor: '#ffd700', minHeight: '100vh' }}>
            <Navbar />
            <form className="contact-form my-4 mb-4" onSubmit={(e) => onSubmit(e)}>
                <div className='my-2'>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                    // onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input
                        type='number'
                        placeholder='Enter Phone Number'
                        name="phone_Number"
                        value={phone_Number}
                        onChange={(e) => onInputChange(e)}
                    ></input>
                </div>
                <div className='text-center my-2'>
                    <p style={{color:"white"}}>{formatDate(start_Date)}</p>
                    <input
                        type="date"
                        name="start_Date"
                        value={date1}
                        placeholderText="Enter Start Date"
                        onChange={(e) => onInputChange(e)}
                    ></input>
                </div>
                <div className='text-center mb-2'>
                    <p style={{color:"white"}}>{formatDate(end_Date)}</p>
                    <input
                        type="date"
                        name="end_Date"
                        value={date2}
                        placeholderText="Enter End Date"
                        onChange={(e) => onInputChange(e)}
                    ></input>
                </div>

                <div className='text-center'>
                    <button className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditMember