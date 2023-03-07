import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Login from './Login/Login';
import Register from './Register/Register';
import { Question } from './Question/Question';

const ModalWin = ({
  signInModal,
  signUpModal,
  questionModal,
  setSignUpModal,
  setSignInModal,
  setQuestionModal,
}) => {
  const onClose = (event) => {
    if (event.target) setSignUpModal(false);
    if (event.target) setSignInModal(false);
    if (event.target) setQuestionModal(false);
  };

  return (
    <Modal
      open={signUpModal || signInModal || questionModal} //isOpen
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
      id="modalBackground"
    >
      <Box
        id="modalBackground"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: '300px',
          borderRadius: '8px',
        }}
      >
        {signInModal && <Login setSignInModal={setSignInModal} />}
        {signUpModal && <Register setSignUpModal={setSignUpModal} />}
        {questionModal && <Question setQuestionModal={setQuestionModal} />}
      </Box>
    </Modal>
  );
};

export default ModalWin;
