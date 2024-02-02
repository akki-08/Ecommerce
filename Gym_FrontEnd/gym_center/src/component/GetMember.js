import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import AddMember from './AddMember';

const GetMember = () => {
    const [data, setData] = useState([]);
    const [editingMember, setEditingMember] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9090/api/member/getAllMember');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const formatDate = dateString => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const navigate = useNavigate();

    const editEmployee=(id)=>{
        navigate(`/addMember`);
    }

    const handleEdit = (member) => {
        AddMember.AddMember(member.id , member);
      };


    return (
        <div style={{ backgroundColor: '#ffd700', minHeight: '100vh' }}>
            <Navbar />
            <table border='1'>
                <thead>
                    <tr className='tableBorder'>
                        <th className='tableHead'>ID</th>
                        <th className='tableHead'>Name</th>
                        <th className='tableHead'>Phone Number</th>
                        <th className='tableHead'>Start Date</th>
                        <th className='tableHead'>End Date</th>
                        <th className='tableHead'>Action</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#f0f0f0' }}>
                    {data.map(item => (
                        <tr key={item.id} className='tableBorder'>
                            <td className='tableBorder'>{item.id}</td>
                            <td className='tableBorder'>{item.name}</td>
                            <td className='tableBorder'>{item.phone_Number}</td>
                            <td className='tableBorder'>{formatDate(item.start_Date)}</td>
                            <td className='tableBorder'>{formatDate(item.end_Date)}</td>
                            <td className='tableBorder text-center'>
                                <Link to={`/editMember/${item.id}`}><button className='btn btn-success mx-1'>Edit</button></Link>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetMember