import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deleteComment, listReviewByStatus } from '../../../ApiRequest/APIRequest';
import { DeleteAlert } from '../../../Helper/DeleteHelper';

const DisplayedReviews = () => {
    useEffect(() => {
        listReviewByStatus("COMPLETE")
    }, [])
    const NewReviewList = useSelector((state) => state.reviews.Completed);
    const handleDeleteReview=(id)=>{
        DeleteAlert()
        .then((result)=>{
            if(result){
                deleteComment(id)
                .then((res)=>{
                    if(res===true){
                        listReviewByStatus("COMPLETE")
                    }
                })
            }
        })
    }
    return (
        <div>
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
                                        <button onClick={()=>handleDeleteReview(item._id)} type="button" class="btn btn-danger btn-sm">Delete</button>
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

export default DisplayedReviews;