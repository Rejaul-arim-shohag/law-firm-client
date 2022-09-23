import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { readBlogById, updateBlog } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmpty } from '../../../Helper/FormHelper';
import JoditEditor from 'jodit-react';

const UpdateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    let { id } = useParams();
    let navigate = useNavigate()
    let titleRef, descriptionRef, imageRef, previewimageRef = useRef();
    useEffect(() => {
        readBlogById(id)
            .then((result) => {
                setContent(result?.description);
                debugger;
                titleRef.value = result?.title
                previewimageRef.src = result?.image
                // descriptionRef.value = result?.description
               
                debugger;
            })
    }, [])
    // const singleBlog = useSelector(state => state.singleBlog.singleBlog);

    const previewImage = () => {
        let imageFile = imageRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            previewimageRef.src = base64Image
        })
    }
    const handleUpdateBlog = () => {
        const image = previewimageRef.src;
        const title = titleRef.value;
        // const description = descriptionRef.value
        if (IsEmpty(title)) {
            ErrorToast("Blog Title require")
        } else if (content.length<10) {
            ErrorToast("Blog Description require")
        } else {

            updateBlog(id, image, title, content)
                .then((result) => {
                    if (result) {
                        navigate("/blogList")
                    }
                })
        }
    }


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-12">
                        <div className="card py-2">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <img style={{ height: "70px" }} ref={(input) => previewimageRef = input} alt="" />
                                        </div>
                                        <div className="col-6 p-2">
                                            <label>Image</label>
                                            <input onChange={previewImage} ref={(input) => imageRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="file" />
                                        </div>

                                        <div className="col-6 p-2">
                                            <label>Blog Title</label>
                                            <input ref={(input) => titleRef = input} placeholder="Title" className="form-control animated fadeInUp" type="mobile" />
                                        </div>
                                        <JoditEditor
                                            ref={editor}
                                            onChange={(input) => setContent(input)}
                                            value={content}
                                        />
                                        {/* <div className="col-12 col-md-12 mt-2">
                                            <textarea ref={(input) => descriptionRef = input} placeholder="Write a blog" rows="10" className="form-control animated fadeInUp" />
                                        </div> */}
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6 mt-2">
                                            <button onClick={handleUpdateBlog} className="btn w-50 mx-auto btn-success animated fadeInUp">UPDATE</button>
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

export default UpdateBlog;