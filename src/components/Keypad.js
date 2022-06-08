import React from 'react'

function Keypad() {
  
    function changingPass() {
        console.log('Entering password...');
    }
  
    return (
    <div>
        <input type="password" onChange={changingPass}></input>
    </div>
  )
}

export default Keypad