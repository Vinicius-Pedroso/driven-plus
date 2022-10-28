import Login from "./Components/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App (){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}