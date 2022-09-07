import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs";
import { delteBlogById, readBlogList } from '../../../ApiRequest/APIRequest';
import { DeleteAlert } from '../../../Helper/DeleteHelper';

const OurBlogList = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        readBlogList()
    }, [])
    const blogList = useSelector(state => state.blogs.blogList);
    const handleDeleteBlog=(id)=>{
        DeleteAlert().then((res)=>{
            if (res) {
                delteBlogById(id)
                    .then((res) => {
                        if(res===true){
                            readBlogList()
                        }
                    })
            }
        })
    
        // 
    }
    
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h5>Blog List</h5>
                    <button onClick={() => navigate("/createBlog")} className="btn btn-success">Create New Blog</button>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive data-table">
                                    <table className="table ">
                                        <thead className="sticky-top bg-white">
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Blog Title</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>

                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Created Date</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                blogList.map((item, i) =>
                                                    <tr key={item._id}>
                                                        <td>
                                                             <h6 className="mb-0  text-xs">{item.title}</h6>
                                                        </td>
                                                        <td>
                                                            <p className="text-xs font-weight-bold mb-0">{item.authorName}</p>
                                                        </td>
                                                        <td>
                                                            <p className="text-xs font-weight-bold mb-0">{item.createDate.slice(0, 10)}</p>
                                                        </td>
                                                        
                                                        <td className="d-flex justify-content-center">
                                                            <div className="float-right h-auto">
                                                                <div className="user-dropdown">
                                                                    <button type="button" class="icon-nav btn btn-success btn-sm actionBtn"><BsThreeDotsVertical /></button>
                                                                    <div className="action-dropdown-content">
                                                                        <a className="side-bar-item-user px-2 py-1">
                                                                            <span onClick={()=>navigate(`/updateBlog/${item._id}`)} className="side-bar-item-caption">Edit</span>
                                                                        </a>
                                                                        <a className="side-bar-item-user px-2 py-1">
                                                                            <span onClick={()=>handleDeleteBlog(item._id)} className="side-bar-item-caption">Delete</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                )
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlogList;