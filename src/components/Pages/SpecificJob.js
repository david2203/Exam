import React, {useState, useEffect} from 'react'
import axios from "axios";
import server from "../Config_Env/Config"
import Hero from '../Body_comps/Hero_comps/HeroSpecificJob';
import {useNavigate} from "react-router-dom";
import arrow from "../Icons/arrow.png";
import Jobs from './Jobs';

function SpecificJob() {
 //page for showing a specific job
    
    const userId = localStorage.getItem("userId")

    //getting id of specified job from url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const jobId = urlParams.get("id")


    // getting data ready for later use
    const navigate = useNavigate()
    const useGetJob = () => {
        const [jobInfo, setJobInfo] = useState([])
        const [existing, setExisting] = useState([])
        const [loading, setLoading] = useState(true)
       
            const getSpecificJob = async() => {
                try {
                    const job = await axios.get(`${server}api/jobs/${jobId}`)
                    setJobInfo(job.data)

                    const existingSaved = await axios.get(`${server}api/users/${userId}`)
                    setExisting(existingSaved.data.savedIds.savedJobs)
                }catch(err) {
                    console.log(err)
                }
                setLoading(false)
            }

            
            
        useEffect(() => {
            getSpecificJob()
        },[])
        
        return(
            {jobInfo, loading, existing}
        )  

    }

    const {loading, jobInfo, existing} = useGetJob()

    //navigation to application to specified job
    function sendToApply() {
        navigate(`/ApplyToSpecific?jobId=${jobId}`)
    }

    //take me to top function
    const [display, setDisplay] = useState("block")
    window.onscroll = function() {takeMeToTop()};
    function takeMeToTop() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setDisplay("block")
        } else {
        setDisplay("none")
        }
    }

      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
      
      const addedToExisting = []
      
      // function for adding job to saved jobs
      function addToSaved(e) {

            existing.push(Number(jobId))
            existing.sort()
            for(let i = 0; i < existing.length; i++){
                function compare(a, b) {
                    if(a !== b) {
                     addedToExisting.push(a)
                    }
                }
         
                compare(existing[i], existing[i+1])
            }
       
            axios.put(`${server}api/users/${userId}`, {

                    "savedIds": {
                        "savedJobs" : addedToExisting
                    }
            })
            .then(
            navigate("/savedJobs"),
            window.location.reload())
      }

      useEffect(()=> {
        topFunction()
    },[])
    return (

        // specific job jsx
        <div className="specificJob-v1">
           <Hero/>

        {!loading? <>
            <div className="InfoContainer-specificJob-v1">
            <h2><strong> Position: </strong> {jobInfo.data.attributes.Job_Profiles}</h2><br/>
        <p><strong> Brand: </strong> {jobInfo.data.attributes.Brand_Name}</p>
        <p><strong> Location: </strong> {jobInfo.data.attributes.locationCountry}</p>
        <p><strong> Number of openings:</strong> {jobInfo.data.attributes.Number_of_Openings_Available}</p>
        <p><strong> Work-shift: </strong> {jobInfo.data.attributes.Work_Shift}</p>
        <p><strong> Start date: </strong> {jobInfo.data.attributes.startDate}</p>
        <p><strong> Job description: </strong> </p>  <div className="danger" dangerouslySetInnerHTML={{__html: jobInfo.data.attributes.Job_Description }} />

    
        </div>
       
        <div id="navigateToApplication"> <strong>Does this job fit you? Send and application right <a href="" onClick={sendToApply} > here </a> or go to <a href={jobInfo.data.attributes.External_Apply_URL} >Workdays official application site</a> </strong> </div>
        <div> If you want to apply later, add this job to your watch list! <button className="button-81" onClick={addToSaved}>Add</button></div>
        </> :
        <> loading...</>
        }
            
            <button onClick={topFunction} id="toTop" className={display} title="Go to top"><img src={arrow} className="fas fa-arrow-up"/></button>

            
        </div>
    )
}

export default SpecificJob
