import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const Home = () => {

    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setId(event.target.value);
    };

    const fetchData = async () => {
        try {
            // Make an API call to fetch data based on the entered ID
            const response = await fetch(`http://localhost:9090/api/member/${id}`);
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData(null);
            setError('Error fetching data. Please try again.');
        }
    };

    useEffect(() => {
        if (id !== '') {
            fetchData();
        }
    }, [id]);

    const formatDate = dateString => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="home" style={{ backgroundColor: '#ffd700', minHeight: '100vh' }}>
            <Navbar />
            <div className='mt-2 mx-2'>
            <button className='btn btn-success mx-2'>Get Info By ID:</button>
                <label>
                    
                    <input
                        type="text"
                        value={id}
                        onChange={handleInputChange}
                        placeholder="Enter ID"
                    />
                </label>
                {data && (
                    <div>
                        <h2>Info for ID: {id}</h2>
                        <ul>
                            <li>ID: {data.id}</li>
                            <li>Name: {data.name}</li>
                            <li>Phone Number: {data.phone_Number}</li>
                            <li>Start Date: {formatDate(data.start_Date)}</li>
                            <li>End Date: {formatDate(data.end_Date)}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home