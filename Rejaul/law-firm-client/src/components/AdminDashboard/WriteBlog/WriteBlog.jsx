import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateBlog } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmpty } from '../../../Helper/FormHelper';
import JoditEditor from 'jodit-react';

const WriteBlog = () => {
    let navigate = useNavigate()
    let imageRef, titleRef, blogDescriptionRef, imagePreviewRef = useRef()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const previewImage = () => {
        let imageFile = imageRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            imagePreviewRef.src = base64Image
        })
    }
    const handleCreateBlog = () => {
       
        let image = imagePreviewRef.src;
        let title = titleRef.value;
        // let blogContent = blogDescriptionRef.value;
        if (IsEmpty(title)) {
            ErrorToast("Title Require")
        } else if (content.length<20) {
            ErrorToast("Blog content require")
        }
        else if (imageRef.files[0]===undefined) {
            ErrorToast("Blog image require")
        } else {
            CreateBlog(image, title, content)
                .then((result) => {
                    navigate("/blogList")
                })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-12">
                        <h5 className="mx-2 py-3">Write blog</h5>
                        <div className="card py-2">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6 p-2">
                                            <label>Image</label>
                                            <input onChange={previewImage} ref={(input) => imageRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="file" />
                                        </div>

                                        <div className="col-6 p-2">
                                            <label>Blog Title</label>
                                            <input ref={(input) => titleRef = input} placeholder="Title" className="form-control animated fadeInUp" type="mobile" />
                                        </div>
                                        {/* <div className="col-12 col-md-12 mt-2">
                                            <textarea ref={(input) => blogDescriptionRef = input} placeholder="Write a blog" rows="10" className="form-control animated fadeInUp" />
                                        </div> */}
                                        <JoditEditor
                                            ref={editor}
                                            onChange={(input) => setContent(input)}
                                            value={content}
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6 mt-2">
                                            <button onClick={handleCreateBlog} className="btn w-50 mx-auto btn-success animated fadeInUp">SAVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WriteBlog;