import React, { useRef } from 'react';
import { useEffect } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogCommentsCreate, readBlogById } from '../../ApiRequest/APIRequest';
import { ErrorToast, IsEmpty } from '../../Helper/FormHelper';
const BlogComments = () => {
    let { id } = useParams();
    let nameRef, commentRef = useRef();

    useEffect(() => {
        readBlogById(id)
    }, [])
    const singleBlog = useSelector(state => state.singleBlog.singleBlog)
    console.log(singleBlog)
    const handleCreateComment = () => {
        const name = nameRef.value;
        const comment = commentRef.value;
        if (IsEmpty(name)) {
            ErrorToast("Name Required")
        }
        else if (IsEmpty(comment)) {
            ErrorToast("Empty Comment Not allow")
        } else {
            blogCommentsCreate(id, name, comment)
                .then((res) => {
                    if (res) {
                        readBlogById(id)
                        commentRef.value = ""
                        nameRef.value = ""
                    }
                })
        }

    }
    return (
        <div className="py-5 bg-white">
            <hr />
            <div className="container pt-4">
                <div className="comments">
                <h5 className="mb-4">comments:</h5>
                    {
                        singleBlog?.blogComents?.map((comment, index) => {
                            return (
                                <div className="singleComment">
                                    <div className="d-flex justify-content-start">
                                        <FaUserAlt />
                                        <h6 style={{ marginLeft: "10px" }} className="text-uppercase">{comment.name}</h6>
                                        <span style={{ marginLeft: "10px" }}>{comment.createDate.slice(0, 10)}</span>
                                    </div>
                                    <h6 style={{ marginLeft: "25px" }} className="text-secondary py-2">{comment.comment}</h6>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-5 pb-5">
                    <div className="row">
                        <div className="col-12">
                            <label className="mb-1">Enter your name:</label>
                            <input ref={(input) => nameRef = input} style={{ backgroundColor: "#F6F6F6" }} className="py-2 form-control" type="text" />
                            <label className="mt-3 mb-1">Write Your Comments:</label>
                            <textarea ref={(input) => commentRef = input} style={{ backgroundColor: "#F6F6F6" }} className="form-control" rows="6"></textarea>
                            <div className="col-12 col-md-2">
                                <button onClick={handleCreateComment} className="w-100 mt-2 btn btn-success text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogComments;