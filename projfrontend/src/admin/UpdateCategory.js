import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {

    updateCategory, getCategory
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {

    const { user, token } = isAutheticated();
    
    const [values, setValues] = useState({
        name: "",
        loading: false,
        error: "",
        getaRedirect: false,
        createdProduct: "",
        formData: ""
    });

    const {
        name,
        loading,
        error,
        getaRedirect,
        createdProduct,
        formData
    } = values;


    const preload = categoryId => {
        getCategory(categoryId).then(data => {
            //console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {

                setValues({
                    ...values,
                    name: data.name,
                    formData: new FormData()
                });
            }
        });
    };


    useEffect(() => {
        preload(match.params.categoryId);
    }, []);

    //TODO: work on it
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        updateCategory(match.params.categoryId, user._id, token, {name}).then(
            data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        loading: false,
                        createdProduct: data.name
                    });
                }
            }
        );
    };
    const warningMessage = () => {
        if (error) {
            return <h4 className="text-danger">{error}</h4>
        }
    }
    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });

    };

    const successMessage = () => (
        <div
            className="alert alert-success mt-3"
            style={{ display: createdProduct ? "" : "none" }}
        >
            <h4>{createdProduct} updated successfully</h4>
        </div>
    );

    const createProductForm = () => (
        <form >
            <span className="mb-2">Update Form</span>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control mt-2"
                    placeholder="Name"
                    value={name}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3 mt-3"
            >
                Update category
            </button>
        </form>
    );


    return (
        <Base
            title="Add a product here!"
            description="Welcome to product creation section"
            className="container bg-info p-4"
        >
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
                Admin Home
            </Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2 mt-4">
                    {warningMessage()}
                    {successMessage()}
                    {createProductForm()}
                    
                </div>
            </div>
        </Base>
    );
};

export default UpdateCategory;
