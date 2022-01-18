
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import server from "../Config_Env/Config"
import Job from "../Body_comps/JobCard"
import Pagination from '../Body_comps/Pagination';
import arrow from "../Icons/arrow.png";



function FilterJobs() {


    const [jobArray, setJobArray] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [firstRender, setFirstRender] = useState(true)
    const [loading, setLoading] = useState(true)
    const initialValues = {
        workLocation: "",
        brandName: "",
        weeklyHrs: "",
        openings: ""
    }
    const [filterValues, setFilterValues] = useState(initialValues)


    function handleFilter(e) {
        if (e.target.value === "Show all") {
            setFilterValues({ ...filterValues, [e.target.name]: "" })
        } else {
            if (e.target.value === "At least 1") {
                setFilterValues({ ...filterValues, [e.target.name]: "0" })
            } else {
                setFilterValues({ ...filterValues, [e.target.name]: e.target.value })
            }

        }


    }

    var qs = require('qs');

    const initialQuery = qs.stringify({
        filters: {
            $and: [
                {
                    locationCountry: {
                        $endsWith: filterValues.workLocation
                    }
                },
                {
                    Brand_Name: {
                        $endsWith: filterValues.brandName
                    }
                },
                {
                    Scheduled_Weekly_Hours: {
                        $endsWith: filterValues.weeklyHrs
                    }
                },
                {
                    Number_of_Openings_Available: {
                        $ne: filterValues.openings
                    }
                },

            ]


        },
        pagination: {
            page: currentPage,
            pageSize: limit,
        },
        fields: ["id", "Brand_Name", "locationCountry", "Scheduled_Weekly_Hours", "Number_of_Openings_Available", "Job_Description", "startDate", "Job_Description_Summary", "Job_Profiles", "Work_Shift", "External_Apply_URL"]
    }, {
        encodeValuesOnly: true,
    });

    function filterSearch(e) {
        if (e) {
            e.preventDefault()
            const fetchFilteredJobs = async () => {
                const response = await axios.get(`${server}api/jobs?${initialQuery}&_limit=-1`)
                setTotalCount(response.data.meta.pagination.total)
                setJobArray(response.data.data)

                setLoading(false)
                setFirstRender(false)
            }
            fetchFilteredJobs()
        } else {
            const fetchFilteredJobs = async () => {
                const response = await axios.get(`${server}api/jobs?${initialQuery}&_limit=-1`)
                setJobArray(response.data.data)

                setLoading(false)
            }
            fetchFilteredJobs()
        }



    }

    useEffect(() => {
        if (!loading) {
            filterSearch()
        }
    }, [currentPage])

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


    return (
        <>
            <section className="filterFormContainer">

                <div>Go to your <Link to="/savedJobs"> Saved Jobs</Link></div> 
                or filter through all existing jobs down below! 
                
                <br/><br/><form onSubmit={filterSearch} className='filterForm'>
                    <label>Chose prefered work location: </label>
                    <select onChange={handleFilter} name="workLocation" id="" className="">
                        <option>Show all</option>
                        <option>Sweden</option>
                        <option>Poland</option>
                        <option>Switzerland</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Ireland</option>
                        <option>Italy</option>
                        <option>Turkey</option>
                        <option>Spain</option>
                        <option>United Kingdom</option>
                        <option>Denmark</option>
                        <option>Netherlands</option>
                        <option>Czechia</option>
                        <option>Finland</option>

                    </select>
                    <label>Chose prefered Brand: </label>
                    <select onChange={handleFilter} name="brandName" id="" className="">
                        <option>Show all</option>
                        <option>Dentsu</option>
                        <option>Amplifi</option>
                        <option>iProspect</option>
                        <option>Merkle</option>
                        <option>Carat</option>
                        <option>Vizeum</option>
                        <option>Dentsu X</option>
                        <option>Global Clients</option>
                        <option>Regions</option>
                        <option>The Story Lab</option>
                        <option>Global Technology</option>
                        <option>Global Functions</option>
                        <option>BJL</option>
                        <option>Dentsu Media</option>
                        <option>Global Business Operations</option>
                        <option>Simple Agency</option>
                        <option>Global iProspect</option>
                        <option>Global Amnet</option>
                        <option>MKTG Sports</option>
                        <option>Global Posterscope</option>
                        <option>Global Addressable</option>
                        <option>Dentsu Data Labs</option>
                        <option>Data2Decisions</option>
                        <option>John Brown</option>
                        <option>dentsu mcgarrybowen</option>
                        <option>Global Dentsu X</option>
                        <option>Whitespace</option>
                        <option>PSI Advertising</option>
                        <option>dentsu EMEA</option>
                        <option>Simple Agency</option>
                        <option>The Big Now</option>

                    </select>
                    <label>Chose prefered weekly working hours: </label>
                    <select onChange={handleFilter} name="weeklyHrs" id="" className="">
                        <option>Show all</option>
                        <option>35</option>
                        <option>37</option>
                        <option>37.5</option>
                        <option>40</option>
                    </select>
                    <label>Chose prefered number of openings: </label>
                    <select onChange={handleFilter} name="openings" id="" className="">
                        <option>Show all</option>
                        <option>At least 1</option>
                    </select>



                    <button className="button-81" type="submit">Filter!</button>
                </form>

            </section>
            <section className="jobCardContainer">
                {jobArray.length === 0 ?

                    !firstRender ? <><div>There are no Jobs for the specified search preferations! Kindly be less specific</div></> : <> <div></div></>


                    :
                    jobArray.map((job, key) => {
                        if (job.attributes.Brand_Name.startsWith("[DONOT USE]")) {
                            return (
                                <div key={key}> </div>
                            )
                        }
                        return (
                            <Job key={key} jobId={job.id} brandName={job.attributes.Brand_Name} locationCountry={job.attributes.locationCountry} weeklyHrs={job.attributes.Scheduled_Weekly_Hours} openings={job.attributes.Number_of_Openings_Available} jobDesc={job.attributes.Job_Description} jobDescSum={job.attributes.Job_Description_Summary} workShift={job.attributes.Work_Shift} startDate={job.attributes.startDate} jobProfiles={job.attributes.Job_Profiles} />
                        )
                    })
                }

                {firstRender ? <></> :
                    <>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={totalCount}
                            pageSize={limit}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </>}

                    <button onClick={topFunction} id="toTop" className={display} title="Go to top"><img src={arrow} className="fas fa-arrow-up"/></button>


            </section>
        </>
    )
}

export default FilterJobs
