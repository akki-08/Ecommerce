import React, {useEffect , useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import MemberService from '../services/MemberService';
import ReactDatePicker from 'react-datepicker';
import Navbar from './Navbar';

const AddMember = () => {
    const [name, setName] = useState('');
    const [start_Date, setStartDate] = useState('');
    const [end_Date, setEndDate] = useState('');
    const [phone_Number, setPhoneNumber] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const AddMember = (e) => {
        e.preventDefault();

        const member = { name, start_Date, end_Date, phone_Number };

        if(id){
            MemberService.updateMember(id,member).then((response) => {
                navigate('/')
            }).catch(error => {
                console.log(error);
            })

        }else{
            MemberService.addMember(member).then((response) => {
                if (name === '' || start_Date === '' || end_Date === '' || phone_Number === '') {
                    alert("Please fill all the details");
                }
                else if(phone_Number.length>10 || phone_Number.length<10)
                {
                    alert("Please enter valid phone number")
                }
                else {
                    alert("Successfully Added")
                    navigate('/')
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }
    useEffect(() => {

        MemberService.getMemberById(id).then((response) => {
            setName(response.data.name);
            setPhoneNumber(response.data.phone_Number);
            setStartDate(response.data.start_Date);
            setEndDate(response.data.end_Date);

        }).catch(error => {
            console.log(error);
        })

    }, [])


    return (
        <div style={{ backgroundColor: '#ffd700', minHeight: '100vh' }}>
            <Navbar/>
            <form className="contact-form my-4 mb-4">
                <div className='my-2'>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input
                        type='number'
                        placeholder='Enter Phone Number'
                        name='phone_Number'
                        value={phone_Number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    ></input>
                </div>
                <div className='text-center my-2'>
                    <ReactDatePicker 
                        selected={start_Date}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText='Enter Start Date'
                    >
                    </ReactDatePicker>
                </div>
                <div className='text-center mb-2'>
                    <ReactDatePicker
                        selected={end_Date}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText='Enter End Date'
                    >
                    </ReactDatePicker>
                </div>

                <div className='text-center'>
                    <button className='btn btn-success' onClick={(e) => AddMember(e)}>Add +</button>
                </div>
            </form>
        </div>
    )
}

export default AddMember
