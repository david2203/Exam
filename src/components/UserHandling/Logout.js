import React, {useEffect} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
function Logout() {
    const navigate = useNavigate()

    useEffect(()=> {
        localStorage.clear()
        navigate("/Login")
        window.location.reload()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Logout
