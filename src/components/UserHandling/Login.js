import React, {useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import server from "../Config_Env/Config"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

function Login() {
    const [failedAttempt, setFailedAtempt] = useState(false)
    const navigate = useNavigate()
    const initialValues = {
        username:" ",
        email:" ",
        password:" ",
        checkPassword :" ",
    }
    const [registerValues, setRegisterValues] = useState(initialValues)
    
    function handleOnChange(e) {
        setRegisterValues({...registerValues,[e.target.name]:e.target.value})
    }

    function handleOnSubmit(e) {
        e.preventDefault()
      
                 axios.post(`${server}api/auth/local`, {
                 identifier: registerValues.email,
                 password: registerValues.password
             }).then( (e)=> { if(e.data.user)
                localStorage.setItem("jwt", e.data.jwt)
                localStorage.setItem("userId", e.data.user.id)
                localStorage.setItem("username", e.data.user.username)
                localStorage.setItem("userEmail", e.data.user.email)

                navigate("/Landingpage");
                window.location.reload();


             }).catch((err)=> { setFailedAtempt(true)})
 
     
     }

     // custom function for password visibility toggle
     const [pwVisibility, setPwVisibility] = useState(false)
     function pwToggle() {
         var x = document.getElementById("password")
         if ( x.type === "password") {
             x.type = "text"
             setPwVisibility(true)
         }
         else {
            x.type = "password"
            setPwVisibility(false)
         }
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4" onSubmit={handleOnSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email" className="form-control" onChange={handleOnChange}/>
                      <label className="form-label" >Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="password" id="password" className="form-control" onChange={handleOnChange} />
                      <label className="form-label" >Password</label>
                    </div>
                    {!pwVisibility ? <i style={{cursor:"pointer"}} className="bi bi-eye-slash pwicon" onClick={pwToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                      </svg>
                      </i> 
                    :
                    <i style={{cursor:"pointer"}} className="bi bi-eye pwicon" onClick={pwToggle}>
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                    </i>

                    }
                  </div>
                  { failedAttempt ? <> 
                  <p>Email and password are either wrong or dont match!</p>
                  <label> Forgotten your password ? </label>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/ForgottenPW" className="" >Reset here</Link>
                  </div></> : 
                  <></>

                  }
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                  </div>
                </form>

                

                  <label> Not registered? </label>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/Register" className="" >Register here</Link>
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

export default Login
