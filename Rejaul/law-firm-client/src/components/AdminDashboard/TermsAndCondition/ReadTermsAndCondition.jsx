import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { readTermsAndCondition } from '../../../ApiRequest/APIRequest';
import ReactHtmlParser from 'react-html-parser';

const ReadTermsAndCondition = () => {
   
    const [terms, setTerms] = useState([])
   
    useEffect(() => {
        readTermsAndCondition()
            .then((result) => {
                setTerms(result?.data)
            })
    }, [])
    let navigate = useNavigate()
    const handlenavigateToUpdate=()=>{
        navigate("/UpdateTermsAndCondition/"+terms[0]?._id)
    }
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h4>Terms&Condition</h4>
                    {
                        terms.length===0?<Link to="/TermsAndCondition">
                        <button className="btn btn-success">Create</button>
                    </Link>:<button onClick={handlenavigateToUpdate} className="btn btn-success">Update</button>
                    }
                    
                </div>
                <div className="card mt-2">
                    <div className="card-body">
                        {
                            terms.length===0?<h3>Terms&condition not added</h3>: ReactHtmlParser(terms[0]?.content)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadTermsAndCondition;