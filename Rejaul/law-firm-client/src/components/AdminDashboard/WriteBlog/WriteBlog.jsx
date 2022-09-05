import React, { useRef } from 'react';
import { CreateBlog } from '../../../ApiRequest/APIRequest';
import { ErrorToast, getBase64, IsEmpty } from '../../../Helper/FormHelper';

const WriteBlog = () => {
    let imageRef, titleRef, blogDescriptionRef,imagePreviewRef = useRef()
    const previewImage = () => {
        let imageFile = imageRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            imagePreviewRef.src = base64Image
        })
    }
    const handleCreateBlog=()=>{
        debugger;
        let image = imagePreviewRef.src;
        let title = titleRef.value;
        let blogContent = blogDescriptionRef.value;
        if(IsEmpty(title)){
            ErrorToast("Title Require")
        } else if(IsEmpty(blogContent)){
            ErrorToast("Blog content require")
        } else{
            CreateBlog(image,title,blogContent)
        }
    }
    return (
        <>
            <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-12">
                    <h5 className="mx-2 py-3">Write a blog</h5>
                    <div className="card py-2">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-6 p-2">
                                        <label>Image</label>
                                        <input onChange={previewImage} ref={(input)=>imageRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="file" />
                                    </div>
                                   
                                    <div className="col-6 p-2">
                                        <label>Blog Title</label>
                                        <input ref={(input)=>titleRef=input} placeholder="Title" className="form-control animated fadeInUp" type="mobile" />
                                    </div>
                                    <div className="col-12 col-md-12 mt-2">
                                        <textarea ref={(input)=>blogDescriptionRef=input} placeholder="Write a blog" rows="10" className="form-control animated fadeInUp" />
                                    </div>
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