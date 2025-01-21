import { useState, FC } from 'react';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import User from './pages/Admin/User/User'
import Login from './pages/Auth/Login';
import ForgotPasswordPage from './pages/Auth/ForgotPassword';
import Signup from './pages/Auth/Signup';
import PageNotFound from './common/PageNotFound';
import Home from './pages/Client/Home/Home';
import About from './pages/Client/About/About';
import TermsCondition from './pages/Cms/TermCondition';
import PrivacyPolicy from './pages/Cms/PrivacyPolicy';
import Chat from './pages/Client/Chat/Chat';
import NonAuthLayout from './layout/NonAuthLayout';
import OTPPage from './pages/Auth/OTP';
import ContacUsPage from './pages/Client/ContactUs/ContacUs';
import Pricing from './components/Pricing/Pricing';
import FAQPage from './components/FAQ/FAQ';


const App: FC = function() {

  return (
    <div>
      <BrowserRouter>
        <Routes>

            {/* ------------------------ Common Pages  ------------------------ */}
            <Route path="/login"  element={<NonAuthLayout><Login /></NonAuthLayout>} /> 
            <Route path="/OTP"  element={<NonAuthLayout><OTPPage /></NonAuthLayout>} /> 
            <Route path="/forgotpassword" element={<NonAuthLayout><ForgotPasswordPage /></NonAuthLayout>}/>
            <Route path="/signup"  element={<NonAuthLayout><Signup /></NonAuthLayout>} />
            <Route path="*"  element={<NonAuthLayout><PageNotFound /></NonAuthLayout>}  />
            <Route path="/terms" element={<NonAuthLayout><TermsCondition /></NonAuthLayout>}  />
            <Route path="/privacy" element={<NonAuthLayout><PrivacyPolicy /></NonAuthLayout>}  />

            {/* ------------------------ Client Pages  ------------------------ */}
            <Route path="/" element={<NonAuthLayout><Home /></NonAuthLayout>} />
            <Route path="/pricing" element={<NonAuthLayout><Pricing /></NonAuthLayout>} />
            <Route path="/faq" element={<NonAuthLayout><FAQPage /></NonAuthLayout>} />
            <Route path="/contactus" element={<NonAuthLayout><ContacUsPage /></NonAuthLayout>} />
            <Route path="/about"element={<NonAuthLayout><About /></NonAuthLayout>} />
            <Route path="/chat" element={<Chat />} />

            {/* ------------------------- Admin Pages------------------------ */}
            <Route path="/admin-user" element={<User />} />
        
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App