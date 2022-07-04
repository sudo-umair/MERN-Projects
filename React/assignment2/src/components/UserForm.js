import React, {useState} from 'react'
import Button from './Button'

export default function UserForm(props) {


  return (
      <form className='user-form my-3' onClick={formSubmitHandler} style={{width: "50%", margin: "0 0 0 25%"}}>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="email@example.com" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" />
          </div>
        </div>
        <center>
          <div className="form-buttons">
            <Button className='mx-2' title="Signup" onClick={props.onSignUp} />
            <Button className='mx-2' title="Login" onClick={props.onLogIn} />
          </div>
        </center>
      </form>
  )
}
