import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";

export default function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetails />} />
            </Routes>
        </div>
    );
}


