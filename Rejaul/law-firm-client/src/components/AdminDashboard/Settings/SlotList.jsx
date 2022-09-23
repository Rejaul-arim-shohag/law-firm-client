import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import logo from "../../../Assets/images/lawyerLogo.png";
import heroImage from "../../../Assets/images/heroLawyear.svg";
import { readSlots, deleteSlot, insertLogo, readLogo, insertHeroImage, readHeroImage } from '../../../ApiRequest/APIRequest';
import { useSelector } from 'react-redux';
import { DeleteAlert } from '../../../Helper/DeleteHelper';
import { ErrorToast, getBase64, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';
import SlotAddModal from '../SlotAddModal/SlotAddModal';
import HeroContent from './HeroContent';
import LogoUploadModal from './LogoUploadModal';
import BannerImageModal from './BannerImageModal';
const SlotList = () => {
    const [modalShow, setModalShow] = useState(false);
    const [LogoModalShow, setLogModalShow] = useState(false);
    const [HeroImageModalShow, setHeroImageModalShow] = useState(false);
    const [logo, setLogo] = useState([]);
    const [heroImage, setHeroImage] = useState([])
    useEffect(() => {
        readSlots()
        readLogo().then((res) => {
            setLogo(res?.data)
        })
        readHeroImage().then((res)=>{
            setHeroImage(res?.data)
        })

    }, [LogoModalShow,HeroImageModalShow])
    const slot = useSelector((state) => (state.slot.slotList));
    const handleDeleteSlot = (id) => {
        DeleteAlert().then((res) => {
            if (res) {
                deleteSlot(id).then((res) => {
                    if (res === true) {
                        readSlots()
                        SuccessToast("Delete success")
                    }
                })
            }
        })

    }


    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5>Slot List</h5>
                                <button onClick={() => setModalShow(true)} className='btn btn-success'>Add Slot</button>
                                <SlotAddModal show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        slot.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.slotTime}</td>
                                                    <button onClick={() => handleDeleteSlot(item._id)} className="btn btn-danger btn-sm my-1" style={{ backgroundColor: "red" }}>Delete</button>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                   <HeroContent/>
                </div>
                <div className="col-12 col-md-5">
                    <div className="card">
                        
                        <div className="card-body text-center">
                            <div className="">
                                <div className="col-12 mt-1 mx-auto d-flex justify-content-between">
                                    <div className="mx-auto">
                                        <img src={logo[0]?.logo} style={{ width: "230px" }} alt="" />
                                    </div>
                                    
                                </div>
                                <div className="col-12 col-md-6 mx-auto mb-2 mt-2">
                                    <button onClick={() => setLogModalShow(true)} className="btn btn-success btn-sm"> {logo[0]===0 ? "Upload Logo": "Change Logo"}</button>
                                    <LogoUploadModal show={LogoModalShow} onHide={() => setLogModalShow(false)}/>
                                </div>
                            </div>
                            <hr/>
                            <div className="mt-3">
                                <img src={heroImage[0]?.photo}  style={{ width: "150px", height: "150px", borderRadius: "50%" }} alt="" />
                                <div className="mt-4">
                                    <button onClick={() => setHeroImageModalShow(true)} className='btn btn-success btn-sm'>{heroImage[0]===0?"Uplaod Image":"Change Image"}</button>
                                    <BannerImageModal show={HeroImageModalShow} onHide={() => setHeroImageModalShow(false)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlotList;