import React, { useState, useEffect }  from 'react';
import './EntryPage.css';
import LoginForm from '../../components/login/LoginForm';
import PasswordReset from '../../components/password-reset/PasswordReset';

import { Jumbotron } from 'react-bootstrap';

const EntryPage = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ formLoad, setFormLoad ] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        break;
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      alert("Please fill out the form")
    }

    // Call API to login
    console.log('login: ', email, password)
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault(); 

    if (!email) {
      alert("Please enter your email")
    }

    // Call API to login
    console.log('reset: ', email)
  }

  const formSwitcher = (formType) => {
    setFormLoad(formType)
  }


  return(
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        { formLoad == "login" && 
          <LoginForm 
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit} 
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          /> }

        { formLoad == "reset" && 
          <PasswordReset 
            handleOnChange={handleOnChange} 
            handleOnResetSubmit={handleOnResetSubmit} 
            formSwitcher={formSwitcher}
            email={email}
          /> }
      </Jumbotron>
    </div>
  )
}

export default EntryPage; 