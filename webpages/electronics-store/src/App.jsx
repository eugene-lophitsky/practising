import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/StartPage/Home/Home.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import About from './components/About/About.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import "./css/main.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path="*" element={<NotFound/>}/>
                    <Route index element={<Home />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='about' element={<About />} />
                    <Route path='sign-up' element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
