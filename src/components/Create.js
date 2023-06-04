import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[email, setEmail] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://647b6592d2e5b6101db13fff.mockapi.io/crud',{
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        })
    }
  return (
    <>
     <div className='row' >
        <div className='col-md-4'>
        <div className='mb-2 mt-2'>
                <Link to='/'>
                <button className='btn btn-primary'>Read Data</button>
                </Link>
            </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Create Data</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label>Enter Your Name:</label> 
                <input type='text' placeholder='Enter Your Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='form-group'>
                <label>Enter Your Age:</label> 
                <input type='number' placeholder='Enter Your Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
                </div>

                <div className='form-group'>
                <label>Enter Your Email:</label> 
                <input type='email' placeholder='Enter Your Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br/>
                <div className='d-grid'>
                <input type='submit' value='submit' className='btn btn-primary' />
                </div>
                
            </form>
            {name}
            <br/>
            {age}
            <br/>
            {email}
            <br/>
        </div>
      
      </div>
      </>
    )
   
   
}

export default Create
