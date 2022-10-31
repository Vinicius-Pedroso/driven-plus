import Login from "./Components/login"
import Signup from "./Components/signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscription from "./Components/subscription";
import Plan from "./Components/plan";
import Home from "./Components/home";

export default function App (){

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/subscription" element={<Subscription/>}/>
                    <Route path="/subscription/:idPlan" element={<Plan/>}/>
                    <Route path="/Home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}