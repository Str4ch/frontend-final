import React from "react";

import InputComponent from "../components/InputComponent";
import LabelComponent from "../components/LabelComponent";
import AlertComponent from "../components/AlertComponent";

import { useState } from "react";

const LogInPage = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error,  setError ] = useState("")

    const handleEmailChange = (changedValue) => {
        setEmail(changedValue)
    }

    const handlePasswordChange = (changedValue) => {
        setPassword(changedValue)
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkEmail = {
        checkEmpty: (stringEmail) => stringEmail !== "",
        checkFormat: (stringEmail) => regex.test(stringEmail),
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            if(!checkEmail.checkEmpty(email)) throw Error("EMPTY!!")
            if(!checkEmail.checkEmpty(email)) throw Error("Bad email input")
            
            setError(null)
            
            const response = await fetch("http://localhost:3000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            })
            if (!response.ok) {
                throw new Error("Network response was not ok");
              }
            if(response.status === 401){
                throw Error("invalid")
            }
            const token = await response.json()
            localStorage.setItem("token", token)
        } catch (error) {
            console.error("Invalid email format")
            setError("Invalid email format", error)
        }
    }

    return (
     <form
      className="card shadow-sm p-4 w-100"
      style={{ maxWidth: "480px", margin: "auto" }}
     >
      <h1 className="text-center">Log In</h1>
   
      <div className="mb-3">
        <LabelComponent htmlFor="emailInput" text="Email"/>
        <InputComponent 
            onChange={handleEmailChange}
            emailValue={email}
            type="email" 
            id="emailInput" 
            ariaDescribe="emailHelp"/>
      </div>
      <div className="mb-3">
        <LabelComponent htmlFor="passwordInput" text="Password"/>
        <InputComponent
            onChange={handlePasswordChange}
            passwordValue={password} 
            type="password" 
            id="passwordInput" 
            ariaDescribe="passwordHelp"/>
      </div>
        {error && <AlertComponent alertType="alert-danger" text={error}/>}
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
     </form>
    )
   }
   
   export default LogInPage
    