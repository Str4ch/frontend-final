import React from "react";

import InputComponent from "../components/InputComponent";
import LabelComponent from "../components/LabelComponent";
import AlertComponent from "../components/AlertComponent";

import { useState } from "react";

const SignUpPage = () => {
    const [ formData, setFormData ] = useState("")
     const [ error,  setError ] = useState("")

    const fieldConfig = [
        { name: "firstName", label: "First Name", type: "text", id: "firstNameInput" },
        { name: "lastName",  label: "Last Name",    type: "text", id: "lastNameInput"  },
        { name: "email",     label: "Email",  type: "email",id: "emailInput"     },
        { name: "password",  label: "Password", type: "password", id: "pwdInput" },
        { name: "role",      label: "Role",   type: "text", id: "roleInput"      },
        { name: "imageUrl",     label: "Avatar", type: "file", id: "imageInput"     },
      ];

    const handleChange = (field) => (value) =>{
        setFormData((prev) => ({...prev, [field]: value}))
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkEmail = {
        checkEmpty: (stringEmail) => stringEmail !== "",
        checkFormat: (stringEmail) => regex.test(stringEmail),
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if(!checkEmail.checkEmpty(formData["email"])) throw Error("EMPTY!!")
            if(!checkEmail.checkEmpty(formData["email"])) throw Error("Bad email input")
            setError(null)
            
            const response = await fetch("http://localhost:3000/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
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
      <h1 className="text-center">Sign Up</h1>
      {fieldConfig.map(({name, label, type, id}) => (
        <div className="mb-3" key={name}>
            <LabelComponent htmlFor={id} text={label}/>
            <InputComponent 
                onChange={handleChange(name)}
                value={formData[name]}
                type={type}
                id={id}
                ariaDescribe={`${id}Help`}/>
        </div>
        ))}
        {error && <AlertComponent alertType="alert-danger" text={error}/>}
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
     </form>
    )
   }
   
   export default SignUpPage

    