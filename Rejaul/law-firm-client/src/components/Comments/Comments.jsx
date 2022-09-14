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
    const updateReview = (id) => {
        updateReviewStatus(id, "COMPLETE")
            .then((res) => {
                if (res === true) {
                    listReviewByStatus("NEW")
                }
            })
    }
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="mb-3">NEW REVIEWS</h4>
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
                                            <td className="text-center">{item.comment.length > 60 ? item.comment.slice(0, 60) + "..." : item.comment}</td>
                                            <td>
                                                <button onClick={() => updateReview(item._id)} type="button" class="btn btn-success btn-sm">Accept</button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Comments;