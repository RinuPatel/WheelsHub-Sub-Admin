import NavbarTopFirst from "../../../NavbarTopFirst"
import Navbar from "../../../Navbar"

const Dashboard = () => {
    return (
        <>
            <NavbarTopFirst />
            <div className="nav-content">
                <div>
                    <Navbar />
                </div>
                <div className="ml-1">
                    <h1>Comming Soon </h1>

                </div>
            </div>
        </>
    )
}
export default Dashboard;