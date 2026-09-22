import react from 'react'
import { useRef } from 'react';

function Now() {
    const headingRef =useRef(null);
    console.log(headingRef.current);

    const changeHeading = () => {
        headingRef.current.innerText = "Heading Changed";
    };

  return (
    <>
        <h2 ref={headingRef}>Now</h2>
        <button onClick={changeHeading}>Change Heading</button>
    </>
  )
}
export default Now;