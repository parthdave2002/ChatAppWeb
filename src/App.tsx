import { useState, FC } from 'react';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import User from './pages/Admin/User/User'
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Signup from './pages/Auth/Signup';
import PageNotFound from './common/PageNotFound';
import Home from './pages/Client/Home/Home';
import About from './pages/Client/About/About';
import TermsCondition from './pages/Cms/TermCondition';
import PrivacyPolicy from './pages/Cms/PrivacyPolicy';
import Chat from './pages/Client/Chat/Chat';
import Floatingbot from './components/Floatingbot/Floatingbot';

const App: FC = function() {

  return (
    <div>
      <BrowserRouter>
        <Routes>

            {/* ------------------------ Common Pages  ------------------------ */}
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* ------------------------ Client Pages  ------------------------ */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat />} />

            {/* ------------------------- Admin Pages------------------------ */}
            <Route path="/admin-user" element={<User />} />
        
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App