import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import server from "../Config_Env/Config"
import {useNavigate} from "react-router-dom"

function ApplyToSpecific() {


  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const jobId = urlParams.get("jobId")
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate()
    const email = localStorage.getItem("userEmail")
    const [error, setError] = useState("")

    // collecting information about chosen Job for application 
    const useGetJob = () => {
        const [jobInfo, setJobInfo] = useState([])
        const [loading, setLoading] = useState(true)
       
            const getSpecificJob = async() => {
                try {
                    const job = await axios.get(`${server}api/jobs/${jobId}`)
                    setJobInfo(job.data)
                }catch(err) {
                    console.log(err)
                }
                setLoading(false)
            }
            
        useEffect(() => {
            getSpecificJob()
        },[])
        
        return(
            {jobInfo, loading}
        )  

    }
    const {loading, jobInfo} = useGetJob()

    if(!loading) {
        console.log(jobInfo)
    }
    const now = new Date()
    const nowFormat = (now.toISOString().split('T')[0])

    
    //handeling form infomation for later submit
    const initialValues = {
        email: email,
        file: "",
        date: nowFormat
    }
    const [applyValues, setApplyValues] = useState(initialValues)

    function handleOnChange(e) {
        
        setApplyValues({...applyValues,[e.target.name]:e.target.value})
        if(e.target.name === "file") {
            setApplyValues({...applyValues,[e.target.name]:e.target.files[0]})
        }
        console.log(applyValues)
    }
    
    // function for submitting the application
    function handleOnSubmit(e) {
        e.preventDefault()
        const data = new FormData();
        data.append("files", applyValues.file)

        if(applyValues.file !== "" ) {
          axios.post(`${server}api/upload`, data).then((res) => {
            const imageId = res.data[0].id
            
            axios.post(`${server}api/applications`, {
                "data": {
                  "user": userId,
                  "job": jobId,
                  "startDate": applyValues.date,
                  "applyEmail": applyValues.email,
                  "CV": applyValues.CV
                  
                  
                }
              }).then( (response)=> { 
                const applicationId = response.data.data.id
            axios.put(`${server}api/applications/${applicationId}`, {
                "data" : {
                    "CV" : imageId
                }
            }).then((response)=> {
              if(response.data.data.attributes.applyEmail) {
                navigate("/myApplications?event=success")
              }
            })
    
    
        }).catch((err)=> {console.log("something went wrong!") })
        })
        }
        else {
          setError("Please add a CV to your application!")
        }
        
    
    }

    
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  useEffect(()=> {
      topFunction()
  },[])
        
    return (

      //application jsx
        <div className='applicationContainer bg-shade'>
            <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Application information </p>

                <form className="mx-1 mx-md-4" onSubmit={handleOnSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email" value={applyValues.email}className="form-control" onChange={handleOnChange}/>
                      <label className="form-label" >Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-control-file flex-fill mb-0">
                      <input type="file" name="file" className="form-control" onChange={handleOnChange}/>
                      <label className="form-label" >Uppload CV</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-control-file flex-fill mb-0">
                      <input type="date" name="date" value={applyValues.date} min={nowFormat}  className="form-control" onChange={handleOnChange}/>
                      <label className="form-label" > When can you start ?</label>
                    </div>
                  </div>

                  <p>{error}</p>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Apply</button>
                  </div>
                </form>

                

                  <label> Not interested?</label>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/Jobs" className="" >Back to jobs</Link>
                  </div>                  
                </div>

                
                
                
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column justify-content-center order-1 order-lg-2">
                <h2>You are about to apply to the following Job: </h2> {!loading? <> 
                  <p> <strong>Title:</strong> {jobInfo.data.attributes.title}</p>
                <p> <strong>Location:</strong> {jobInfo.data.attributes.locationCountry}</p>
                <p> <strong>Brand:</strong> {jobInfo.data.attributes.Brand_Name}</p>
                <p> <strong>Work shift:</strong> {jobInfo.data.attributes.Work_Shift}</p>
                </> : <></> }
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default ApplyToSpecific
