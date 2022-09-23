import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";
import { readAddress } from '../../../ApiRequest/APIRequest';
import { useSelector } from 'react-redux';
const Address = () => {
    useEffect(() => {
        readAddress()
    }, [])
    const address = useSelector((state) => (state.address.addressList));
    return (
        <div className="container">
           <div className="card">
            {
                address?.length===0 ?<Link to="/insertAddress"><button className="btn btn-success">Add address</button></Link>:<div className="card-body mx-2">
                <h4>Address</h4>
                <h6> <span className="text-secondary">WorksDay:</span> {address[0]?.address.worksDay}</h6>
                <h6><span className="text-secondary">Location:</span> {address[0]?.address.location}</h6>
                <h6><span className="text-secondary">Phone:</span> {address[0]?.address.phone}</h6>
                <h6><span className="text-secondary">Email:</span> {address[0]?.address.email}</h6>
                <h6><span className="text-secondary">About Us:</span> {address[0]?.aboutUs}</h6>

                <h4 className="mt-4 mb-2">Social Link</h4>
                <h6><span className="text-secondary">Facebook:</span> {address[0]?.socialLink.facebook}</h6>
                <h6><span className="text-secondary">Twitter:</span> {address[0]?.socialLink.linkedin}</h6>
                <h6><span className="text-secondary">Linkedin:</span> {address[0]?.socialLink.twitter}</h6>
                <h6><span className="text-secondary">Instagram:</span> {address[0]?.socialLink.instagram}</h6>
                <h6><span className="text-secondary">Youtube:</span>  {address[0]?.socialLink.youtube}</h6>
                <div className="col-md-2">
                    <Link to="/addressUpdate">
                        <button className="btn btn-success w-100">
                            Edit <AiFillEdit />
                        </button>
                    </Link>
                </div>
            </div>
            }
           </div>
        </div>
    )
};
export default Address;

        

                