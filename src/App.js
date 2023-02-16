import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Signup from './pages/Signup';

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
