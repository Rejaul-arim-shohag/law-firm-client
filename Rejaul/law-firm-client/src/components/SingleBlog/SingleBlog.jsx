import React, { useEffect } from 'react';
import { FaUserAlt, FaComments, FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import singleBlogImg from "../../Assets/images/accident.jpg"
import { readBlogById } from '../../ApiRequest/APIRequest';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser';

const SingleBlog = () => {
    let { id } = useParams()
    useEffect(() => {
        readBlogById(id)
    }, [])
    const singleBlog = useSelector(state => state.singleBlog.singleBlog)
    return (
        <div className="bg-white">
            <div className="container">
                <div className="py-5 col-12 col-md-5 d-flex justify-content-between mx-auto">
                    <div className="d-flex justify-content-center">
                        <FaUserAlt />
                        <h6 className="px-2">{singleBlog.authorName}</h6>
                    </div>

                    <div className="d-flex justify-content-center"><h6>{moment(singleBlog.createDate).format("MMM Do YY")}</h6></div>
                    <div className="d-flex justify-content-center"><FaComments /><h6 className="px-2">
                        {singleBlog?.blogComents?.length} Comment
                    </h6>
                    </div>
                </div>
            </div>
            <div style={{ height: "400px" }} className="w-100">
                <img className="w-100 h-100" src={singleBlog.image} alt="" />
            </div>
            <div className="container">
                <div className="blogContentAndShareOption row py-5">
                    <div className="col-12 col-md-3">
                        <h3 className="text-secondary">Share</h3>
                        <hr />
                        <div className="shareIcon">
                            <h6 className="text-secondary py-2"><FaFacebookSquare /><span style={{ marginLeft: "7px" }}>Facebook</span></h6>
                            <h6 className="text-secondary py-2"><FaTwitter /><span style={{ marginLeft: "7px" }}>Twitter</span></h6>
                            <h6 className="text-secondary py-2"><FaInstagram /><span style={{ marginLeft: "7px" }}>Instagram</span></h6>
                            <h6 className="text-secondary py-2"><AiFillLinkedin /><span style={{ marginLeft: "7px" }}>Linkedin</span></h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <h3>
                            {singleBlog.title}
                        </h3>
                        <h6 className="lh-base fw-normal">
                            {
                                <p className="card-text">{ReactHtmlParser(singleBlog.description)}</p>
                            }
                        </h6>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default SingleBlog;