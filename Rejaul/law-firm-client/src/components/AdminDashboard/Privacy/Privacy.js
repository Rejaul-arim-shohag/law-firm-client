import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { readPrivacyAndPolicy } from '../../../ApiRequest/APIRequest';
import ReactHtmlParser from 'react-html-parser';

const Privacy = () => {
    const [privacy, setPrivacy] = useState([])

    useEffect(() => {
        readPrivacyAndPolicy()
            .then((result) => {
                setPrivacy(result?.data)
            })
    }, [])
    let navigate = useNavigate()
    const handlenavigateToUpdate = () => {
        navigate("/UpdatePrivacy/"+privacy[0]?._id)
    }
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h4>Privacy&Policy</h4>
                    {
                        privacy.length === 0 ? <Link to="/createPrivacy">
                            <button className="btn btn-success">Create</button>
                        </Link> : <button onClick={handlenavigateToUpdate} className="btn btn-success">Edit</button>
                    }

                </div>
                <div className="card mt-2 ">
                    <div className="card-body">
                        {
                            privacy.length===0?<h3>Privacy and policy not added yet</h3>: ReactHtmlParser(privacy[0]?.content)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;