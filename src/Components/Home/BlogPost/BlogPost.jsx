import React, { useEffect } from 'react';
import './BogPost.css';
import { Link, useNavigate } from 'react-router-dom';

function BlogPost({ title, image, description }) {
    const navigate = useNavigate();
    let shortTitle = title;
    let shortDescription = description;
        if (title.length > 20)
            shortTitle = title.slice(0, 20) + "...";
        if (description.length > 100)
            shortDescription = description.slice(0, 100) + "...";
    const fullBlogPost = ()=>{
        navigate('/fullBlog',{state: {image,title,description}});
    }
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." style={{height: "200px", objectFit: "cover"}}/>
            <div className="card-body">
                <h3 className="card-title text-center">{shortTitle}</h3>
                <p className="card-text">{shortDescription}</p>
                <button className="btn btn-success" onClick={fullBlogPost}>Continue</button>
            </div>
        </div>
    )
}

export default BlogPost