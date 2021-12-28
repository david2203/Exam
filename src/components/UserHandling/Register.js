import React, {useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import server from "../Config_Env/Config"
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {

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
      
                 axios.post(`${server}api/auth/local/register`, {
                 username: registerValues.username,
                 email: registerValues.email,
                 password: registerValues.password
             }).then( (e)=> { if(e.data.user)
                navigate("/Login");
                window.location.reload();

             }).catch((err)=> {console.log(err)})
 
     
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleOnSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="username" className="form-control" onChange={handleOnChange} />
                      <label className="form-label" >Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email" className="form-control" onChange={handleOnChange}/>
                      <label className="form-label" >Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="password" id="password" className="form-control" onChange={handleOnChange} />
                      <label className="form-label" >Password</label>
                    </div>
                    {!pwVisibility ? <i style={{cursor:"pointer"}} className ="bi bi-eye-slash" onClick={pwToggle}>Show password</i> 
                    :
                    <i style={{cursor:"pointer"}} className ="bi bi-eye" onClick={pwToggle}>Hide password</i>
                    }
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" name="checkPassword" className="form-control" onChange={handleOnChange}/>
                      <label className="form-label" >Repeat your password</label>
                    </div>
                  </div>

                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    />

                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

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

export default Register
