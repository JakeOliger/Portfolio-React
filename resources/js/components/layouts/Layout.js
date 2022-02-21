import Navbar from "../Navbar.js";
import NavDrawer from "../NavDrawer.js";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <NavDrawer />
            <div id="content-container">
                <Outlet />
            </div>
        </div>
    );
}