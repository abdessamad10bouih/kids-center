import Footer from "@/components/Footer"
import {TopBar} from "@/components/top-bar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-dvh flex-col flex">
            <TopBar/>
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout