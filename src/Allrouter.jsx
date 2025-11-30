import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import { Gallery } from './Pages/Gallery/Gallery';
import Packages from './Pages/package/package';
import Login from './Pages/login/login';
import SignUp from './Pages/login/signUp.jsx';
import { Book } from './Pages/Booking/Book.jsx';
import StatePage from './Pages/Booking/statePage.jsx';
import BookingForm from './Pages/package/form.jsx';
import ContactPage from './Pages/Contact/Contact.jsx';

export default function Allroutes(){
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
             <Route path="/Gallery" element={<Gallery />} />
             <Route path ="/Packages"element={<Packages />} />
             <Route path ="/login"element={<Login />} />
             <Route path ="/signup"element={<SignUp />} />
             <Route path ="/book"element={<Book />} />
            <Route path="/state" element={<Book />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingForm />} />
        <Route path="/state/:stateName" element={<StatePage />} />
        </Routes>
    )
}
