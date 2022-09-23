import React, { useState } from 'react';
import { useEffect } from 'react';
import { deleteHeroContent, readHeroContent } from '../../../ApiRequest/APIRequest';
import { DeleteAlert } from '../../../Helper/DeleteHelper';
import { SuccessToast } from '../../../Helper/FormHelper';
import HeroContentAddModal from './HeroContentAddModal';

const HeroContent = () => {
    const [modalShow, setModalShow] = useState(false);
    const [heroContent, setHeroContent] = useState([])
    useEffect(()=>{
        readHeroContent()
        .then((result)=>{
            setHeroContent(result.data);
        })
    }, [modalShow])
   const handleDeleteContent=(id)=>{
    DeleteAlert().then((res)=>{
        if(res){
            deleteHeroContent(id).then((res)=>{
                setHeroContent((heroContent) =>
                heroContent.filter((fruit) => fruit._id !== id)
              );
                SuccessToast("Delete Success")
            })
        }
    })
   }
    return (
        <div className="mt-4 mx-1">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5>Hero Content</h5>
                        {
                            heroContent.length===0 ? <button onClick={() => setModalShow(true)} className="btn btn-success">Add</button>:<button onClick={()=>handleDeleteContent(heroContent[0]._id)} className="btn btn-warning">Delete</button>

                        }
                        <HeroContentAddModal show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                    <div className="mt-1">
                        <h6 className="mb-3"><span className="text-secondary">Main Title:</span> {heroContent[0]?.title1}</h6>
                        <h6><span className="text-secondary">Sub Title:</span> {heroContent[0]?.title2}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;