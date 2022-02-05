import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './StudentRequests.css'
import axios from 'axios';

function StudentRequests() {

  useEffect(() => {
    axios.get("http://localhost:9000/get_data")
    .then(res => {
      console.log(res.data);
    })
  }, []);
  
  return <div className="student_requests">
      <Sidebar/>
      <h1>Student Requests</h1>
  </div>;
}

export default StudentRequests;
