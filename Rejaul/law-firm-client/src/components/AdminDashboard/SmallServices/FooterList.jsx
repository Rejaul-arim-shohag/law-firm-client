import React, { useState } from 'react';
import { useEffect } from 'react';
import { deleteFooter, readFooterList } from '../../../ApiRequest/APIRequest';
import { DeleteAlert } from '../../../Helper/DeleteHelper';
import { SuccessToast } from '../../../Helper/FormHelper';
import FooterAddModal from './FooterAddModal';

const FooterList = () => {
    const [modalShow, setModalShow] = useState(false);
    const [footers, setFooters] = useState([]);
    useEffect(() => {
        readFooterList()
            .then((result) => {
                setFooters(result)
            })
    }, [])
    const handleDeleteFooter = (id) => {
        DeleteAlert().then((res)=>{
            if(res){
                SuccessToast("Delete Success")
                setFooters(footers => {
                    const filteredFooters = footers.filter((footer) => {
                        return footer._id !== id;
                    });
                    return [...filteredFooters];
                });
                deleteFooter(id)
            }
        })
       
    }
    return (
        <div className="container mt-5 mb-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between me-5 mb-3">
                        <h5>Footer Legal Services</h5>
                        <button onClick={() => setModalShow(true)} className="btn btn-success">Add item</button>
                        <FooterAddModal show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive data-table">
                                <table className="table ">
                                    <thead className="sticky-top bg-white">
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Link</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            footers.map((item, i) =>
                                                <tr key={item._id}>
                                                    <td>
                                                        <p className=" mt-3 text-xs font-weight-bold mb-0">{item?.name}</p>
                                                    </td>
                                                    <td>
                                                        <p className=" mt-3 text-xs font-weight-bold mb-0">{item?.link}</p>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center align-items-center mt-3">
                                                            <button onClick={()=>handleDeleteFooter(item._id)} className="btn btn-danger btn-sm">Delete</button>
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
    );
}

export default FooterList;
