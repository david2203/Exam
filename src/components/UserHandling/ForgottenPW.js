import React, {useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import server from "../Config_Env/Config"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

function ForgottenPW() {

    const initialValues = {
        identifier: ""
    }
    const [madeRequest, setMadeRequest] = useState(false)
    const [failedAttempt, setFailedAtempt] = useState(false)
    const [formValues, setFormValues] = useState(initialValues)
    function handleOnChange(e) {
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
    function handleOnSubmit(e) {
        
       e.preventDefault()
        
             axios.post(`${server}api/auth/forgot-password`, {
                email: formValues.identifier
            }).then((response)=> {
                console.log(response)
            })
        
        console.log("hej")    
         
        
        
    }
    return (
        <>
            <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Request password</p>

                <form className="mx-1 mx-md-4" onSubmit={handleOnSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" >Please enter the email that is connected to your account: </label>
                      <input type="email" name="identifier" className="form-control" onChange={handleOnChange}/>
                      {/* <label className="form-label" >Email</label> */}
                    </div>
                  </div>

                  
                  
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Request change</button>
                  </div>
                </form>

                { failedAttempt ? <> 
                  <p>We didnt find any account that is registered with that email!</p>
                  <label> Create a new account with the given email ? </label>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/Register" className="" >Register here</Link>
                  </div></> : 
                  <></>

                  }

                

                  <label> Suddenly remember your password ? </label>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/Register" className="" >Back to Login!</Link>
                  </div>                  
                </div>

                
                
                
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default ForgottenPW
