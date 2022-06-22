import React from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Base = ({
    title = "My Title",
    description = "My description",
    className = " bg-dark text-white p-4",
    children
}) => {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            
            
            



        </div>
    )
}

export default Base;