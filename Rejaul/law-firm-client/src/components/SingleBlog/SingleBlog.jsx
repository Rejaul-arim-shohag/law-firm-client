import React from 'react';
import { FaUserAlt, FaComments, FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import singleBlogImg from "../../Assets/images/accident.jpg"
const SingleBlog = () => {
    return (
        <div className="bg-white">
            <div className="container">
                <div className="py-5 col-12 col-md-5 d-flex justify-content-between mx-auto">
                    <div className="d-flex justify-content-center">
                        <FaUserAlt />
                        <h6 className="px-2">Rejaul Karim</h6>
                    </div>
                    <div className="d-flex justify-content-center"><h6>25 April 2023</h6></div>
                    <div className="d-flex justify-content-center"><FaComments /><h6 className="px-2">4 Comments</h6></div>
                </div>
            </div>
            <div style={{ height: "400px" }} className="w-100">
                <img className="w-100 h-100" src={singleBlogImg} alt="" />
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
                            Construction Law
                        </h3>
                        <h6 className="lh-base fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde dolorem sapiente facilis fugit animi officia commodi assumenda ipsam voluptatibus minus laudantium temporibus, quas sed nobis perferendis laborum voluptas, molestiae aliquam, aliquid repellat? Consequatur error totam aliquam ad quis eos accusamus modi perferendis illo. Odit, eaque iste! A ipsum dolores voluptatem voluptas tenetur saepe provident blanditiis, dicta animi illo reprehenderit id delectus totam ut necessitatibus fugit vitae, maiores natus illum fugiat quo fuga quas consequatur? Corporis iure non accusamus excepturi quas soluta aliquid, ab odio quibusdam ut. Officia veritatis necessitatibus, amet eos odio eaque quis architecto fugiat molestiae nemo sunt blanditiis deserunt incidunt enim, saepe sed vitae officiis, molestias unde! Harum laboriosam perspiciatis quibusdam nemo nihil libero officia, provident eius animi, deleniti ipsum numquam. Laborum quos suscipit autem tempora, unde quo voluptate sit reprehenderit fuga quasi. Ab perferendis dolorem laudantium, fugit rerum voluptates facere sit inventore perspiciatis quibusdam nostrum voluptatibus, expedita sed harum odit excepturi molestiae accusantium repellat? Aut magnam nemo quibusdam cupiditate illo mollitia, blanditiis, inventore cum harum libero at temporibus velit, suscipit maxime. Doloribus error fugiat doloremque qui in aperiam dolorem provident veniam blanditiis voluptatem asperiores rem alias cupiditate sit, fugit beatae ab molestiae repudiandae, nemo, temporibus ex.</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;