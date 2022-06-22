import React from 'react'
import Base from "../core/Base"
import { isAutheticated } from "../auth/helper/index"
import { Link } from 'react-router-dom';

const AdminDashBoard = ()=>{


    const {user: {name,email,role}} = isAutheticated();


    const adminLeftSide = ()=>{
        return(
            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>

                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-success">Create Category</Link>

                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-success">Manage Category</Link>

                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-success">Create Product</Link>

                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-link text-success">Manage Product</Link>

                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-success">Manage Oders</Link>

                    </li>
                </ul>



            </div>
        )
    };

 const adminRightSide = ()=>{

    return (
        <div >
           

            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className=" badge badge-success bg-success mr-4">
                            Name:
                        </span>
                        {name}
                    </li>
                    <li className="list-group-item">
                        <span className=" badge badge-success bg-success mr-4">
                            Email:
                        </span>
                        {email}
                    </li>
                </ul>
            </div>

        </div>
    )
        
    };

    return (
       <Base title="Welcome to Admin page"
            description="Manage products here"
            className="container bg-success p-3"> 

       <div  className="row">
           <div className="col-3"> {adminLeftSide()}</div>
           <div className="col-9"> {adminRightSide()}</div>
       </div>
       
       </Base>
    )
};

export default AdminDashBoard;