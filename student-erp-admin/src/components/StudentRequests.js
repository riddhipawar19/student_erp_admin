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
      console.log(res.data);
    })
  }, []);
  
  return <div className='parent'>
        <Sidebar/>
        {data.map (data => {
          return <Reqdata full_name={data.full_name} course={data.course}/>
        })}
          
      </div>
      
      
  
}

export default StudentRequests;