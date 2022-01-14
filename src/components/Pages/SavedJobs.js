
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import server from "../Config_Env/Config"

function SavedJobs() {

    const userId = localStorage.getItem("userId")
   const useGetSaved = () => {
       const [jobArray, setJobArray] = useState([])
       const [loading, setLoading] = useState(true)

        const getSavedJobs = async() => {
            try {
                const jobs = await axios.get(`${server}api/users/${userId}`)
                setJobArray(jobs.data)
                
            }
            catch(err) {
                console.log(err)
            }
            setLoading(false)
        }

        useEffect(()=> {
            getSavedJobs()
        },[])

        return(
            {loading, jobArray}
        )

   }

   const {loading, jobArray} = useGetSaved()

   if(!loading){
       console.log(jobArray)
   }
    return (
        <div>
            saved Jobs
        </div>
    )
}

export default SavedJobs
