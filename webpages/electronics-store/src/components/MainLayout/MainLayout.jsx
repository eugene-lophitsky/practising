import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

function MainLayout () {
    return (
        <>
        <Menu/>
        <Outlet/>
        </>
    )
}

export default MainLayout;