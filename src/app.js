import Login from "./Components/login"
import Signup from "./Components/signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscription from "./Components/subscription";

export default function App (){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/subscription" element={<Subscription/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}