<<<<<<< HEAD
import React, { useEffect , useState} from 'react';
import Sidebar from './Sidebar';
import './StudentRequests.css'
import axios from 'axios';
import Reqdata from './Reqdata';

function StudentRequests() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/get_data")
    .then(res => {
      setdata(res.data);
=======
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './StudentRequests.css'
import axios from 'axios';

function StudentRequests() {

  useEffect(() => {
    axios.get("http://localhost:9000/get_data")
    .then(res => {
>>>>>>> origin/main
      console.log(res.data);
    })
  }, []);
  
<<<<<<< HEAD
  return <div className='parent'>
        <Sidebar/>
        {data.map (data => {
          return <Reqdata full_name={data.full_name} course={data.course}/>
        })}
          
      </div>
      
      
  
=======
  return <div className="student_requests">
      <Sidebar/>
      <h1>Student Requests</h1>
  </div>;
>>>>>>> origin/main
}

export default StudentRequests;