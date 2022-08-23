import {
  Dialog, DialogBody, DialogHeader
} from "@material-tailwind/react";
import { Fragment } from "react";
import { AiOutlineClose } from 'react-icons/ai';
export default function Modal({ open, setOpen, item }) {


  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader> 
          <h1 onClick={handleOpen} className="text-right rounded-full p-1 text-lg ml-auto mr-2 mt-2 cursor-pointer hover:bg-red-600 duration-100 hover:text-white "><AiOutlineClose/></h1> 
          </DialogHeader>
        <DialogBody >
          {item}
        </DialogBody>
       
      </Dialog>
    </Fragment>
  );
}