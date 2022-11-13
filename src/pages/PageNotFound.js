import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete } from 'react-icons/fi'

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="page-not-found__card">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <button onClick={() => navigate(-1)}> <FiDelete /> BACK </button>
        </div>
    )
}

export default PageNotFound;