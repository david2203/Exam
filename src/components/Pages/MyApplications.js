import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import server from "../Config_Env/Config"
import Application from "../Body_comps/ApplicationCard"
import Pagination from '../Body_comps/Pagination';
import arrow from "../Icons/arrow.png";


function MyApplications() {
    const userId = localStorage.getItem("userId")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const event = urlParams.get("event")
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [finished, setFinished] = useState(false)
    var qs = require('qs');

    const initialQuery = qs.stringify({
        // filters: {
            
        // },
        pagination: {
            page: currentPage,
            pageSize: limit,
        },
        fields: ["applyEmail"]
    }, {
        encodeValuesOnly: true,
    });

    

   
        const useGetApplications = () => {
            const [applicationArray, setApplicationArray] = useState([])
            const [loading, setLoading] = useState(true)
           
                const getMyApplications = async() => {
                    try {
                        const response = await axios.get(`${server}api/applications?${initialQuery}&&populate=*`)
                        setTotalCount(response.data.meta.pagination.total)
                        setApplicationArray(response.data.data)
                        console.log(response)
                        
                    }catch(err) {
                        console.log(err)
                    }
                    setLoading(false)
                }
                
            useEffect(() => {
                getMyApplications()
            },[])
            
            return(
                {applicationArray, loading}
            )
        }
        const [done, setDone] = useState(false)
        const {loading, applicationArray} = useGetApplications()
        const myApplications = []
        if(!loading) {
            
            for(let i = 0; i < applicationArray.length; i++) {
                if(applicationArray[i].attributes.user.data.id === Number(userId)) {
                    myApplications.push(applicationArray[i])
                    if(i === applicationArray.length - 1) {
                       
                       
                        
                    }
                    
                }
                
            }
        }

        
     
     
    return (
        <div>
            {event === "success" ? <div className="successApp"> Your application was successfully recieved!<br/> </div> : <></>}

            {myApplications.length > 0 ? <><br/><h2>Here are your pending applications:</h2></>: <> <br/><h2 className="nothingToShow">You dont have any applications curently! Please head over to Jobs and apply for one of the jobs!</h2><br/></>}
            

            {
                myApplications.map((application, key) => {
                    return (
                        <Application key={application.id} id={application.id} jobId={application.attributes.job.data.id} jobTitle={application.attributes.job.data.attributes.title} jobLocation={application.attributes.job.data.attributes.locationCountry} jobWorkShift={application.attributes.job.data.attributes.Work_Shift} jobBrand={application.attributes.job.data.attributes.Brand_Name} applicationEmail={application.attributes.applyEmail} startDate={application.attributes.startDate}/>
                    )
                })
            }

            {myApplications.length > 4 && <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={totalCount}
                            pageSize={limit}
                            onPageChange={page => setCurrentPage(page)}
                        />}
        </div>
    )
}

export default MyApplications
