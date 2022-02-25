import React, { useState } from "react";

export default function Login() {

  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleSubmit = (event)=> {
      event.preventDefault();
      alert(`username: ${username}, password: ${password}`);
  }
  return(
  < form onSubmit={(e)=> handleSubmit(e)}>
    <input
        type="text"
        className="input"  
        value= {username}
        onChange={(e) => setUserName(e.target.value)}         
        placeholder=" type your username" />
    <input
        type="text"
        className="input"  
        value= {password}
        onChange={(e) => setPassWord(e.target.value)}         
        placeholder=" type your password" />
    <input className="SubmitButton" type="submit" />

  </form>

  )

  }




