import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues]= useState({
    email:"",
    password:""
  })

function handleSubmit(event){
  event.preventDefault();
  console.log(enteredValues)
}

  function handleChange(identifier, value){
    setEnteredValues(prevValues =>({
      ...prevValues,
      [identifier]:value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleChange("email", event.target.value)} value={enteredValues.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleChange("password", event.target.value)} value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
