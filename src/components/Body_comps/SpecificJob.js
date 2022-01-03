import React, {useState, useEffect} from 'react'
import axios from "axios";
import server from "../Config_Env/Config"
import Job from "./JobCard"
import Hero from './Hero_comps/HeroSpecificJob';

function SpecificJob() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const jobId = urlParams.get("id")
    
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

    
    return (
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
        <p><strong> Job description: </strong> </p>  <div dangerouslySetInnerHTML={{__html: jobInfo.data.attributes.Job_Description }} />

    
        </div>
        <div> <strong>Does this job fit you? Send and application right <a href=""> here </a> or go to <a href={jobInfo.data.attributes.External_Apply_URL} >Workdays official application site</a> </strong> </div>
        </> :
        <> loading...</>
        }
            

        </div>
    )
}

export default SpecificJob
