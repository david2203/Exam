import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
// logut function / simple local storage cleanse and navigation to login and a reload to make it apear in a good way
function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
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
