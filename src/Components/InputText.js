import React, { useState } from "react";

function InputText(props) {
   const [word, setValue] = useState(""); 
 
  return (
    <div>
     
      <input
        type="text"
        className="input"  
        value= {word}
        onChange={(e) => setValue(e.target.value)}         
        placeholder=" type your text" />
        
        
                {word}
        
        </div>
  );
}

export default InputText;
