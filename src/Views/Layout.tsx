import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";

const Layout = () => {
    return (
        <div>
            <Nav/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;