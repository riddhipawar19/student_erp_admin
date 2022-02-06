import React, { useEffect , useState} from 'react';
import Sidebar from './Sidebar';
import './StudentRequests.css'
import axios from 'axios';
import RequestData from './RequestData';
import { BsCheckLg } from "react-icons/bs"
import { ImCross } from "react-icons/im"

function StudentRequests() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/get_data")
    .then(res => {
      setdata(res.data);
      console.log(res.data);
    })
  }, []);
  
  return <>
  <div className='parent'>
  <Sidebar/>
        <div className="req__main">
        {data.map (data => {
          return <div className="data">
          <div className="data__items">
          <div>{data.full_name}</div>
          <div>{data.course}</div>

          <div className="control__btns">
          <div className="btn" id="accept__btn">
            ACCEPT
            <BsCheckLg/>
          </div>
          <div className="btn" id="deny__btn">
            DENY
            <ImCross/>
          </div>
          </div>
          
          </div>
          </div>
        })}
      </div>
      </div>
      </>
      
  
}

export default StudentRequests;