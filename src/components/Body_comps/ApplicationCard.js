import React, { useState } from 'react'
import Modal from 'react-modal';
import axios from "axios"
import server from "../Config_Env/Config"

function ApplicationCard({ id, jobId, jobTitle, jobLocation, jobWorkShift, jobBrand, applicationEmail, startDate }) {
    // Card that is looped through from MyApplications.js


    //style of the modal for revoke function
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [openModal, setOpenModal] = useState(false)

    //delete application function
    function revokeApplication(e) {
        e.preventDefault()

        axios.delete(`${server}api/applications/${id}`).then((response) => {
            console.log(response)
            window.location.reload()
        })
            .catch((err) => {
                console.log(err)
            })

    }
    function reasureRevoke() {
        setOpenModal(true)
    }

    function closeModal() {
        setOpenModal(false)
    }


    return (

        //html card of all applications
        <div className='application-card-container-v1' >

            <div className="jobcard-left col-5">
                <p>  <strong> Job Title: </strong> {jobTitle}</p>

                <p><strong> Company: </strong> {jobBrand}</p>

                <p><strong> Location: </strong> {jobLocation}</p>

                <p><strong>Work Shift: </strong> {jobWorkShift}</p>
            </div>
            <div className='jobcard-right col-7'>


                <p><strong> You applied with: </strong> {applicationEmail}</p>
                <p><strong> Your prefered start date: </strong> {startDate}</p>
                <button className="button-81" onClick={reasureRevoke}> Revoke Application </button>
            </div>
            <br />


            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >


                <div>Are you sure you want to revoke your application? </div>
                <form>
                    <button className="button-81" onClick={revokeApplication}>Yes</button>
                    <button className="button-81" onClick={closeModal}>No</button>


                </form>
            </Modal>


        </div>
    )
}

export default ApplicationCard
