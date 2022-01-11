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
        filters: {
            
        },
        pagination: {
            page: currentPage,
            pageSize: limit,
        },
        populate: {
            user: {
               fields: ["id", "username"]
            },
            job: {
                fields: ["id", "locationCountry"]
            }
        }
    }, {
        encodeValuesOnly: true,
    });

    

   
        const useGetApplications = () => {
            const [applicationArray, setApplicationArray] = useState([])
            const [loading, setLoading] = useState(true)
           
                const getMyApplications = async() => {
                    try {
                        const response = await axios.get(`${server}api/applications?${initialQuery}`)
                        setTotalCount(response.data.meta.pagination.total)
                        setApplicationArray(response.data.data)
                        
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
            console.log(applicationArray)
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
            {event === "success" ? <> Your application was successfully recieved!<br/> </> : <></>}
            Here are your pending applications:

            {
                myApplications.map((application, key) => {
                    return (
                        <Application key={application.id} jobId={application.attributes.job.data.id} />
                    )
                })
            }
        </div>
    )
}

export default MyApplications
