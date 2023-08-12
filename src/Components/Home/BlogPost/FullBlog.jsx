import React from 'react'
import { useLocation } from 'react-router-dom'

function FullBlog() {
    const location = useLocation();
    const { image, title, description } = location.state;
    return (
        <div className='fullBlog'>
            <div className="container-fluid px-4 py-5">
            <h1 className='text-center mb-2'>Blog - {title}</h1>
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center">{title}</h3>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullBlog