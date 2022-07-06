import { Box, Button, ButtonGroup, Modal } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Authorization from './Authorization/Authorization';
import './HeaderMenu.scss';
import UserMenu from './UserMenu/UserMenu';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function HeaderMenu({ isLogin, logout }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    document.location.href = '/';
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__logo-block">
            <Button href="#">Logo</Button>
          </div>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Шорты</Button>
            <Button>Джинсы</Button>
            <Button>Майки</Button>
            <Button>Костюмы</Button>
            <Button>18+</Button>
          </ButtonGroup>
          <div className="header__login-block">
            {!isLogin ? (
              <Link to="/login">
                <Button className="header__login-button" variant="contained" onClick={handleOpen}>
                  Логин
                </Button>
              </Link>
            ) : (
              <div className="header__login-block_authorized">
                <UserMenu logout={logout} />
              </div>
            )}
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Authorization onClose={handleClose} />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
