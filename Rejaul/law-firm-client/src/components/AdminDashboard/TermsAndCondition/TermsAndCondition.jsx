import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { ErrorToast, IsEmpty } from '../../../Helper/FormHelper';
import { insertTermsAndCondition } from '../../../ApiRequest/APIRequest';
const TermsAndCondition = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const handleCreateTermsAndCondition = () => {
        if (content.length < 10) {
            ErrorToast("Content Require")
        } else {
            insertTermsAndCondition(content)
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
                    <div className="col-12 col-md-3 ">
                        <button onClick={handleCreateTermsAndCondition} className="btn btn-success mx-2 p-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndCondition;