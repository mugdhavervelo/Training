import React from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';
import './App.css';

import Main from './Components/Main.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Alerts from './Components/Alerts.tsx';
import Nurses from './Components/Nurses.tsx'
import Patients from './Components/Patients.tsx';
import Providers from './Components/Providers.tsx';
import Devices from './Components/Devices.tsx';
import Programs from './Components/Programs.tsx';
import Settings from './Components/Settings.tsx';
import Users from './Components/Users.tsx';
import Dashboard from './Components/Dashboard.tsx';
import Orders from './Components/Orders.tsx';

const myColor: MantineColorsTuple = [
  '#f21616',
  '#fed1fd',
  '#faa1f6',
  '#f66ef1',
  '#f243eb',
  '#f028e9',
  '#f018e8',
  '#d609ce',
  '#bf00b9',
  '#a700a1',
];

const theme = createTheme({
  fontFamily: '"Lato", serif',
  components: {
    Text: {
      styles: {
        root: {
          color: 'black',
          fontSize: "20px",
        },
      },
    },
    Card: {
      variants: {
        upcard: (theme) => ({
          root: {
            display: 'grid',
            alignItems: 'center',
            gap: '50px',
            borderLeft: '4px solid red',
            transition: 'border 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 20px 20px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              borderColor: theme.colors.blue[6],
              boxShadow: '0 12px 24px rgba(0, 0, 255, 0.3)',
            },
          },
        }),
      },
    },
    Button: {
      styles: {
        root: { 
          backgroundColor: 'white', 
          color: 'black',
          fontWeight: 400,  // Corrected font-weight
        },
      },
      
    },
  },
});







function App() {
  return (
    <MantineProvider theme={theme}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/Providers" element={<Providers />} />
        <Route path="/Nurses" element={<Nurses />} />
        <Route path="/Devices" element={<Devices />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>

    </MantineProvider>
  );
}

export default App;
