import React from 'react'
import "/src/App.css";

const FullName = (props) => {
    
    return (
      <div className="btn-grad">
        My Full Name is "{props.firstname} {props.lastname}" nice no ?!!!
      </div>
    );
}

export default FullName
