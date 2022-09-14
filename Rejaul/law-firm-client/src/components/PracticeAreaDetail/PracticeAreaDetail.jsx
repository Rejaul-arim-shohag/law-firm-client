import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readServiceById } from '../../ApiRequest/APIRequest';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const PracticeAreaDetail = () => {
    let { id } = useParams();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    useEffect(() => {
        readServiceById(id)
            .then((result) => {
                setTitle(result.Name)
                setDescription(result.description)
            })
            window.scrollTo(0, 0)
    }, [id])

    return (
        <div style={{ backgroundColor: '#E9F5EC' }} className="mb-5">
            <div className="d-flex container justify-content-center">
                <div style={{ backgroundColor: '#E9F5EC' }} className="card py-5 border-0 col-12 col-md-12">
                    <div className="card-body">
                        <h2 className="mb-4">
                            {ReactHtmlParser(title)}
                        </h2>
                        <p>
                            {ReactHtmlParser(description)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeAreaDetail;