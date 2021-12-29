import React, {useState, useEffect} from 'react';
import axios from "axios";
import server from "../Config_Env/Config"

function WorkdayData() {

    const instance = axios.create({baseURL: server})
    const useGetWorkdayData = () => {
        const [dataArray, setDataArray] = useState([]) 
        const [loading, setLoading] = useState(true)
        const fetchWorkday = async()=>{
            try {
                const response =  await axios.get(`https://wd3-impl-services1.workday.com/ccx/service/customreport2/dentsuaegis1/INTJobFeedReport/DAN_Job_Feed?Location_Hierarchies_including_Subordinates%21WID=b6fdb895a425018c29ba154c52489ef1&format=json`, {
                    auth : {
                        "username" : process.env.REACT_APP_WORKDAY_USERNAME,
                        "password" : process.env.REACT_APP_WORKDAY_PASSWORD,
    
                    },
                }
                 )
                 setDataArray(response)
            } catch (err){
                console.log(err)
            }
            
            setLoading(false)
           
            
         }
         useEffect( () => {
            fetchWorkday()
            // eslint-disable-next-line react-hooks/exhaustive-deps
         }, [])
         return {dataArray, loading}
        
    }
    const {loading, dataArray} = useGetWorkdayData()
   

    useEffect(()=> {
        if (!loading) {
            console.log(dataArray)
            const jobEntries = dataArray.data.Report_Entry
           
           for(let i = 0; i < jobEntries.length; i++) {
               console.log(jobEntries[i])
               const All_Supervisory_Orgs = jobEntries[i].All_Supervisory_Orgs
               const Brand_Name = jobEntries[i].Brand_Name
               const Employee_Type = jobEntries[i].Employee_Type
               const ISO2Char = jobEntries[i].ISO2Char
               const Job_Description = jobEntries[i].Job_Description
               const Job_Description_Summary = jobEntries[i].Job_Description_Summary
               const External_Apply_URL = jobEntries[i].Job_Posting_Details_group[0].External_Apply_URL
               const External_Posting_URL = jobEntries[i].Job_Posting_Details_group[0].External_Posting_URL
               const Job_Profiles =  jobEntries[i].Job_Posting_Details_group[0].Job_Profiles
               const Work_Shift = jobEntries[i].Job_Posting_Details_group[0].Work_Shift
               const Job_Family = jobEntries[i].Job_Posting_Details_group[0].job_Family
               const JobFamilyGroup = jobEntries[i].Job_Posting_Details_group[0].jobFamilyGroup
               const JobRequisitionId = jobEntries[i].Job_Posting_Details_group[0].jobRequisitionId
               const StartDate = jobEntries[i].Job_Posting_Details_group[0].startDate
               const TimeType = jobEntries[i].Job_Posting_Details_group[0].timeType
               const Title = jobEntries[i].Job_Posting_Details_group[0].title
               const WorkerSubType = jobEntries[i].Job_Posting_Details_group[0].workerSubType
               const Job_Requsition = jobEntries[i].Job_Requisition
               const Number_Of_Openings_Available = jobEntries[i].Number_Of_Openings_Available
               const RA_ESI_Brand = jobEntries[i].RA_ESI_Brand
               const Scheduled_Weekly_Hours = jobEntries[i].Scheduled_Weekly_Hours
               const LocationCountry = jobEntries[i].locationCountry
               const Locations = jobEntries[i].locations
               const EndDate = jobEntries[i].endDate
                    const data = {
                            All_Supervisory_Orgs : All_Supervisory_Orgs,
                            Brand_Name: Brand_Name,
                            Employee_Type: Employee_Type,
                            ISO2Char: ISO2Char,
                            Job_Description: Job_Description,
                            Job_Description_Summary: Job_Description_Summary,
                            External_Apply_URL: External_Apply_URL,
                            External_Posting_URL: External_Posting_URL,
                            Job_Profiles: Job_Profiles,
                            Work_Shift: Work_Shift,
                            Job_Family: Job_Family,
                            JobFamilyGroup: JobFamilyGroup,
                            JobRequisitionId: JobRequisitionId,
                            StartDate: StartDate,
                            TimeType: TimeType,
                            Title: Title,
                            WorkerSubType: WorkerSubType,
                            Job_Requsition: Job_Requsition,
                            Number_Of_Openings_Available: Number_Of_Openings_Available,
                            RA_ESI_Brand: RA_ESI_Brand,
                            Scheduled_Weekly_Hours: Scheduled_Weekly_Hours,
                            LocationCountry: LocationCountry,
                            Locations: Locations,
                            EndDate: EndDate,
                            }
               
                            
                            
                const postJobs = async()=>{
                           await instance.post("api/jobs", {
                           data: {
                            All_Supervisory_Orgs : All_Supervisory_Orgs,
                            Brand_Name: Brand_Name,
                            Employee_Type: Employee_Type,
                            ISO2Char: ISO2Char,
                            Job_Description: Job_Description,
                            Job_Description_Summary: Job_Description_Summary,
                            External_Apply_URL: External_Apply_URL,
                            External_Posting_URL: External_Posting_URL,
                            Job_Profiles: Job_Profiles,
                            Work_Shift: Work_Shift,
                            job_Family: Job_Family,
                            jobFamilyGroup: JobFamilyGroup,
                            jobRequisitionId: JobRequisitionId,
                            startDate: StartDate,
                            timeType: TimeType,
                            title: Title,
                            workerSubType: WorkerSubType,
                            Job_Requsition: Job_Requsition,
                            Number_Of_Openings_Available: Number_Of_Openings_Available,
                            RA_ESI_Brand: RA_ESI_Brand,
                            Scheduled_Weekly_Hours: Scheduled_Weekly_Hours,
                            locationCountry: LocationCountry,
                            locations: Locations,
                            endDate: EndDate,
                           }
                           
                       }).then(response => {
                           console.log(response)
                       })
                       
                        
                    
                    
                }
                // postJobs()
                
                    
                
                
           }
          
    }
        
    
    })
    
   


    return (
        <div>
            
        </div>
    )
}

export default WorkdayData
