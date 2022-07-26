import React from 'react';
import { AiFillStar} from "react-icons/ai";
const ClientRating = () => {
    
    return (
        <div className="px-3 pb-1 ratingIcons pt-0 size-4 text-warning">
           <AiFillStar/>
           <AiFillStar/>
           <AiFillStar/>
           <AiFillStar/>
           <AiFillStar/>
        </div>
    );
};

export default ClientRating;