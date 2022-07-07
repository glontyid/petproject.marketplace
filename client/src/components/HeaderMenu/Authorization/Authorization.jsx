import { Box, Tab, Tabs } from '@mui/material';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/auth-context';
import AuthForm from './AuthForm/AuthForm';
import RegForm from './RegForm/RegForm';

const Authorization = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Авторизация" {...a11yProps(0)} />
            <Tab label="Регистрация" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AuthForm login={login} handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RegForm handleChange={handleChange} />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Authorization;
