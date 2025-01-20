import { FC, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Bannerimg from "../../assets/offer.jpg";
import { IoClose } from "react-icons/io5";

const OfferModal: FC = function () {
  const [modalopen, setModalopen] = useState(true);
  const toggle = () => setModalopen(!modalopen);

  return (
    <Modal
      isOpen={modalopen}
      toggle={toggle}
      backdrop="static"
      modalTransition={{ timeout: 300 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 "
    >
      <div className=" min-h-[30rem] rounded-[2rem] shadow-lg w-full max-w-lg ">
        <ModalBody className="relative ">
            <div onClick={toggle} className="absolute  -right-2 -top-3  text-gray-100 border-2  p-3 rounded-full cursor-pointer shadow-md h-auto w-auto text-center"> <IoClose /></div>
            <img src={Bannerimg} alt="Banner" className="rounded-xl " />
        </ModalBody>
      </div>
    </Modal>
  );
};

export default OfferModal;
