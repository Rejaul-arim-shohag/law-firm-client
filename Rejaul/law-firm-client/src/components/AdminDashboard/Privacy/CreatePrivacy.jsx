import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { ErrorToast } from '../../../Helper/FormHelper';
import { createPrivacyAndPolicy } from '../../../ApiRequest/APIRequest';
import { useNavigate } from 'react-router-dom';

const CreatePrivacy = () => {
    let navigate = useNavigate()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const handleCreatePrivacy = () => {
        if (content.length < 10) {
            ErrorToast("Content Require")
        } else {
            createPrivacyAndPolicy(content)
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
                <JoditEditor
                    ref={editor}
                    onChange={(input) => setContent(input)}
                    value={content}
                />
                <div className="row">
                    <div className="col-12 col-md-3">
                        <button onClick={handleCreatePrivacy} className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePrivacy;