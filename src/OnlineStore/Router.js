import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Catalog from "./Catalog/Catalog";

function Reviews() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Reviews;