import React from 'react'
import { useState, useRef } from 'react';

function Form() {
    const [name, setName] = useState("");
    const inputRef = useRef();
       console.log("form component rendered");
        const handleSubmit = (e) =>{
        e.preventDefault();
        setName(inputRef.current.value);
        inputRef.current.value = "";
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Name' ref={inputRef} />
        <button type='submit'>Submit</button>
        <h2>{name}</h2>
    </form>
  )
}

export default Form