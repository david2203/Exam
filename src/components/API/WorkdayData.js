import React, {useState, useEffect} from 'react';
import axios from "axios";
import server from "../Config_Env/Config"

function WorkdayData() {
    useEffect(()=> {
        const fetchWorkday = async()=>{
            const response =  await axios.get(`https://wd3-impl-services1.workday.com/ccx/service/customreport2/dentsuaegis1/INTJobFeedReport/DAN_Job_Feed?Location_Hierarchies_including_Subordinates%21WID=b6fdb895a425018c29ba154c52489ef1&format=json`, {
                auth : {
                    "username" : process.env.REACT_APP_WORKDAY_USERNAME,
                    "password" : process.env.REACT_APP_WORKDAY_PASSWORD,

                },
            }
             )
            
           
            console.log(response)
         }
         fetchWorkday()
    }, [])   


    return (
        <div>
            
        </div>
    )
}

export default WorkdayData
