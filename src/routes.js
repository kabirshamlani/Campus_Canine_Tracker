import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register'
import Login from './Login'
import About from './about'
import App from './App'
import Theory from './Theory'
import about from "./about";

function R() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="/auth" element={<App />} />
            <Route path="/theory" element={<Theory />} />
        </Routes>
        </BrowserRouter>
    );
}

export default R;
 