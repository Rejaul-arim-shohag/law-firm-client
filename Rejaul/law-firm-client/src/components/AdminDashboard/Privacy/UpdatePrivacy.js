import React, { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorToast } from '../../../Helper/FormHelper';
import { readPrivacyAndPolicy, updatePrivacyAndPolicy } from '../../../ApiRequest/APIRequest';

const UpdatePrivacy = () => {
    let {id} = useParams()
    
    let navigate = useNavigate()
    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(()=>{
        readPrivacyAndPolicy()
        .then((result) => {
            setContent(result?.data[0]?.content)
        })
    }, [])
    const handleUpdatePrivacy = () => {
        if (content.length < 10) {
            ErrorToast("Content Require")
        } else {
            updatePrivacyAndPolicy(id,content)
            .then((result)=>{
                if(result===true){
                    navigate("/OurPrivacy")
                }
            })
        }
    }
    return (
        <div className="container">
            <div className="card">
                <h5 className="my-2 mx-4">Edit Privacy&Policy</h5>
                <JoditEditor
                    ref={editor}
                    onChange={(input) => setContent(input)}
                    value={content}
                />
                <div className="row">
                    <div className="col-12 col-md-3">
                        <button onClick={()=>handleUpdatePrivacy()} className="btn btn-success">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePrivacy;