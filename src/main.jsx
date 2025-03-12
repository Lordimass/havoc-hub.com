import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4"

import './assets/css/common.css'

import Home from "./pages/home/home.jsx"
import Members from "./pages/members/members.jsx"
import Archive from './pages/archive/archive.jsx';
import Year2020 from './pages/archive/2020.jsx';
import Year2021 from './pages/archive/2021.jsx';
import Year2022 from './pages/archive/2022.jsx';
import Year2023 from './pages/archive/2023.jsx';
import Year2024 from './pages/archive/2024.jsx';
import Year2025 from './pages/archive/2025.jsx';
import NoPage from './pages/404.jsx';

export default function App() {
    var pathname = window.location.pathname
    ReactGA.initialize("G-WED19TWS98")
    ReactGA.send({hitType:"pageview", page:pathname, title:pathname});
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="members" element={<Members />} />
                <Route path="archive" element={<Archive />} />
                <Route path="archive/2020" element={<Year2020 />} />
                <Route path="archive/2021" element={<Year2021 />} />
                <Route path="archive/2022" element={<Year2022 />} />
                <Route path="archive/2023" element={<Year2023 />} />
                <Route path="archive/2024" element={<Year2024 />} />
                <Route path="archive/2025" element={<Year2025 />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
