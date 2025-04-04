// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/LogIn/Login.tsx';
import SignIn from './Components/SignIn/SignIn.tsx';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    </MantineProvider>
  );
}

export default App;