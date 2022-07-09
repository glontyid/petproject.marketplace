import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = ({ logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutFn = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <div className="user-menu">
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Avatar sx={{ mr: 1 }}>Н</Avatar>
        Пользователь
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClose}>
          <Link to="/profile">Профиль</Link>
        </MenuItem>
        <MenuItem onClick={logoutFn}>Выйти</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
