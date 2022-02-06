import React from 'react';
import "./Reqdata.css"

function Reqdata({full_name,course}) {
  return <div className='reqdata'>
      {full_name}
      {course}

  </div>;
}

export default Reqdata;

