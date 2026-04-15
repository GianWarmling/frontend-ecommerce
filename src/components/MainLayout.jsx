import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function MainLayuot() {
    return (
        <div className="flex min-h-screen">
            <Menu></Menu>
            <main className="flex-1 ml-64">
                <div>
                    <Outlet></Outlet>
                </div>
            </main>
        </div>

    );
}

export default MainLayuot;