import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [text, setText] = useState('');
    // const handleOnSubmit=()=>{

    // }
    return (
        <div className=''>
           <input onChange={(e)=>{setText(e.target.value)}} type="text" /> <br />
            <button> <Link to='/home' text={text}> Submit </Link>  </button>
        </div>
    );
};

export default Explore;