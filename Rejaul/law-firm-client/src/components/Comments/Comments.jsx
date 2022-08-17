import React from 'react';
import { useEffect } from 'react';
import { listReviewByStatus, updateReviewStatus } from '../../ApiRequest/APIRequest';
import { useSelector } from 'react-redux';
import { updateHelper } from '../../Helper/UpdateHelper';

const Comments = () => {
    useEffect(() => {
        listReviewByStatus("NEW")
    }, [])
    const NewReviewList = useSelector((state) => state.reviews.New);
    const updateReview=(id)=>{
        updateReviewStatus(id, "COMPLETE")
        .then((res)=>{
            if(res===true){
                listReviewByStatus("NEW")
            }
        })
    }
    return (
        <div>
            <h6>NEW REVIEWS</h6>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th className="text-center" scope="col">Comment</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        NewReviewList.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td className="text-center">{item.comment.length>60?item.comment.slice(0, 60)+"...":item.comment}</td>
                                    <td>
                                        <button onClick={()=>updateReview(item._id)} type="button" class="btn btn-success btn-sm">Accept</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Comments;