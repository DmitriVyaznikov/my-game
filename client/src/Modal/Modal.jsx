import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Login from "./Login/Login";
import Register from "./Register/Register";

const ModalWin = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with login credentials
    };

    return (
        <Modal
            open={true}  //isOpen
            onClose={onClose}
            aria-labelledby="login-modal-title"
            aria-describedby="login-modal-description"
        >
            <Box
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
                {/*<Login handleSubmit={handleSubmit} />*/}
                {/*// раскоменти, чтобы посмотреть окно*/}
                <Register handleSubmit={handleSubmit} />
            </Box>
        </Modal>
    );
};

export default ModalWin;
