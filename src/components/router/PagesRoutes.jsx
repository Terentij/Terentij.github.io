import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../main/Main";
import Profile from "../profile/Profile";

const PagesRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PagesRoutes
