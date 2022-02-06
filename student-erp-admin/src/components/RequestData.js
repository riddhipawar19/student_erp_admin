import React from 'react';
import "./RequestData.css"

function RequestData({full_name,course}) {
  return <div className='request__data'>
    <div className="data">
    {full_name}
    {course}
    </div>
      
  </div>;
}

export default RequestData;

