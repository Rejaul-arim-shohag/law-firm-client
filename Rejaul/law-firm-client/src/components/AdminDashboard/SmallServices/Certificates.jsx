import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { certificateList, deleteCertificate } from '../../../ApiRequest/APIRequest';
import { DeleteAlert } from '../../../Helper/DeleteHelper';
import CertificateAddModal from './CertificateAddModal';

const Certificates = () => {
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        certificateList()
    }, [])

    const handleDeleteCertificate=(id)=>{
        DeleteAlert().then((res)=>{
            if(res){
                deleteCertificate(id).then((res)=>{
                    certificateList()
                })
            }
        })
        
    }
    
    const certificates = useSelector((state) => state.certificate.certificateList);
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between me-5 mb-3">
                        <h5>Your certificates</h5>
                        <button onClick={() => setModalShow(true)} className="btn btn-success">Add Certificate</button>
                        <CertificateAddModal show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive data-table">
                                <table className="table ">
                                    <thead className="sticky-top bg-white">
                                        <tr>
                                            <th className="text-uppercase text-secondary px-5 text-xxs font-weight-bolder opacity-7">Name</th>

                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Created Date</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            certificates.map((item, i) =>
                                                <tr key={item._id}>

                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={item.image} className="avatar me-3" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0  text-xs">{item.name}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className=" mt-3 text-xs font-weight-bold mb-0">{item.createDate.slice(0, 10)}</p>
                                                    </td>

                                                    <td>
                                                        <div className="d-flex justify-content-center align-items-center mt-3">
                                                            <button onClick={()=>handleDeleteCertificate(item._id)} className="btn btn-danger btn-sm">Delete</button>
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
};

export default Certificates;