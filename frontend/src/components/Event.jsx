// import React from 'react'

// function Event() {
//     console.log("Event Component Rendered");
//     const handleClick =() =>{
//         alert("Button Clicked");
//     }
//   return (
//     <div>
//         <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default Event;

import React from 'react'

function Event() {
    const handleMouseOver = () => {
        alert("Mouse Over Event Triggered");
    }
  return (
    <div onMouseOver={handleMouseOver}>Mouse move here</div>
  )
}

export default Event