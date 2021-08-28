import React from 'react';
import CustomModal from '../shared/CustomModal/CustomModal';
import SignUp from '../components/Home/SignUp/SignUp';
const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {
        <CustomModal modalIsOpen={isOpen} closeModal={closeModal} >
          <SignUp />
        </CustomModal>
      }
      <button onClick={handleModal}>SignUp</button>
      <button onClick={handleModal}>login</button>
    </div>
  );
};

export default Home;
