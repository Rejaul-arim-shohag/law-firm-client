import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { ErrorToast, SuccessToast } from '../../../Helper/FormHelper';
import { useEffect } from 'react';
import { readTermsAndCondition, updateTermsAndCondition } from '../../../ApiRequest/APIRequest';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTermsAndCondition = () => {
    let navigate = useNavigate()
    let {id}=useParams()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    useEffect(() => {
        readTermsAndCondition()
            .then((result) => {
                setContent(result?.data[0]?.content)
            })
    }, [])
    const handleCreateTermsAndCondition = () => {
        if (content.length < 10) {
            ErrorToast("Content Require")
        } else {
            updateTermsAndCondition(content,id)
            .then((result)=>{
                if(result===true){
                    navigate("/readTermsAndCondition")
                    SuccessToast("Terms&condition update success")
                }
            })
        }
    }
    return (
        <div className="container">
             <h5 className="my-2 mx-3">You can edit Terms&condition</h5>
            <div className="card">
                <JoditEditor
                    ref={editor}
                    onChange={(input) => setContent(input)}
                    value={content}
                />
                <div className="row">
                    <div className="col-12 col-md-3">
                        <button onClick={handleCreateTermsAndCondition} className="btn btn-success">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateTermsAndCondition;
