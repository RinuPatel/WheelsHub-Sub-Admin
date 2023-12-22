import Navbar from "../../../Navbar";
import NavbarTopFirst from "../../../NavbarTopFirst";
import "./index.css"

const Inbox = () => {
    return (
        <>
            <div className="contect-body">
                <NavbarTopFirst />
                <div className="nav-content">
                    <div>
                        <Navbar />
                    </div>
                    <div className="ml-1">
                        <h1>Inbox</h1>
                        <div className="msg-box">
                            <span> New Message(1)</span>
                            <div className="msg-inner">
                                <p>You have received 1 New Message(s) </p>
                                <button>View message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inbox;
