import Navbar from "../../../Navbar";
import NavbarTopFirst from "../../../NavbarTopFirst";
import "./index.css"

const Inbox = () => {
    return (
        <>
            <NavbarTopFirst />
            <div className="nav-content">
                <div>
                    <Navbar />
                </div>
                <div>
                    <h1>Inbox</h1>
                </div>
            </div>
        </>
    )
}
export default Inbox;
