import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4"

import './common.css'

import Home from "./pages/home/home.js";

import { Home as FundraisingHome } from "./pages/fundraising/home/home.js"
import Members from "./pages/fundraising/members/members.js"
import Archive from './pages/fundraising/archive/archive.js';
import Year2020 from './pages/fundraising/archive/2020.js';
import Year2021 from './pages/fundraising/archive/2021.js';
import Year2022 from './pages/fundraising/archive/2022.js';
import Year2023 from './pages/fundraising/archive/2023.js';
import Year2024 from './pages/fundraising/archive/2024.js';
import Year2025 from './pages/fundraising/archive/2025.js';
import NoPage from './pages/404.jsx';

export default function App() {
    var pathname = window.location.pathname
    ReactGA.initialize("G-WED19TWS98")
    ReactGA.send({hitType:"pageview", page:pathname, title:pathname});
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="fundraising" element={<FundraisingHome />} />
                <Route path="fundraising/members" element={<Members />} />
                <Route path="fundraising/archive" element={<Archive />} />
                <Route path="fundraising/archive/2020" element={<Year2020 />} />
                <Route path="fundraising/archive/2021" element={<Year2021 />} />
                <Route path="fundraising/archive/2022" element={<Year2022 />} />
                <Route path="fundraising/archive/2023" element={<Year2023 />} />
                <Route path="fundraising/archive/2024" element={<Year2024 />} />
                <Route path="fundraising/archive/2025" element={<Year2025 />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}