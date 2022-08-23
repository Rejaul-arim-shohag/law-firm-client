import { PropagateLoader } from 'react-spinners';
import "./loader.css";
export default function Loader({isLoading}) {

 
    return (
        <div className="relative w-screen h-screen ">
            <div className="loader relative">
                <PropagateLoader color='#21BF73' loading={isLoading} size={40} margin={2}  />
            </div>
        </div>
    )
}