import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import FetchApi from "../../../constants/FetchApi";
import "./index.css"

const Dashboard = () => {
    const location = useState()
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isCollapsed, setCollapsed] = useState(false);
    const [userName, setUserName] = useState("")
    const [peddingCount, setPeddingCount] = useState()
    const [online, setOnline] = useState(true)

    const handleToggle = () => {
        setCollapsed(!isCollapsed);
    };
    const handleSidebarToggle = () => {
        setIsSidebarActive(prevState => !prevState);
    };
    const handleCheckAuth = async () => {
        try {
            const data = await FetchApi("check-auth-phone", "", {
                method: "GET"
            })
            if (data.status === 200) {
                setUserName(data.username)
                localStorage.setItem("userName", data.username)
            }

            const res = await FetchApi("driver-req-status", "", {
                method: "GET"
            })
            const statusCounter = res.data;
            console.log(statusCounter);
            if (statusCounter.pending > 0) {
                setPeddingCount(statusCounter.pending)
            }
            console.log("my pedding");

        } catch (error) {
            console.log(error);
        }
    }

    const driverOnlineAndOfflineHander = () => {
        try {
            setOnline(prevStatus => !prevStatus)
        } catch (error) {

        }
    }


    useEffect(() => {
        handleCheckAuth()
    }, [])

    return (
        <>
            <div class="wrapper">
                <nav id="sidebar" className={isSidebarActive ? 'active' : ''}>
                    <div class="sidebar-header">
                        <Link to="/" className="driverTitle"><h2>EasyDrive</h2></Link>
                        <h6>Hi {userName}</h6>
                    </div>
                    <ul class="list-unstyled components">
                        <li class="active" className={isSidebarActive ? 'active' : ''}>
                            <li>
                                <Link to="/dashboard"><img src="myImage/house-check.svg" alt="" className='mx-2' /> Dashboard  </Link>
                            </li>
                            <li>
                                <Link to="/inbox">
                                    <img src="myImage/envelope.svg" alt="" className='mx-2' />
                                    Inbox
                                    {peddingCount && (<span className='booking-count'> {peddingCount}</span>)}
                                </Link>
                            </li>
                            <li>
                                <Link to="/share-car"><img src="myImage/share-fill.svg" alt="" className='mx-2' />Share Cars</Link>
                            </li>
                            <li>
                                <Link to="/your-cars"><img src="myImage/car-front-fill.svg" alt="" className='mx-2' />Your Vahicals</Link>
                            </li>
                            <li>
                                <Link to="/your-cars"><img src="myImage/car-front-fill.svg" alt="" className='mx-2' />Income</Link>
                            </li>
                        </li>
                        <li>
                            <li>
                                <Link to="#"><img src="myImage/person-fill.svg" alt="" className='mx-2' />Account</Link>
                            </li>
                        </li>
                        <li>
                            <Link to="/login"><img src="myImage/box-arrow-in-right.svg" alt="" className='mx-2' />LogOut</Link>
                        </li>

                    </ul>
                </nav>
                <div id="content">
                    <nav className="navbar navbar-expand-lg  bg-light container-fluid"  >
                        <div class="">
                            <button type="button"
                                onClick={handleSidebarToggle}
                                id="sidebarCollapse"
                                className={`navbar-btn ${isSidebarActive ? 'active' : ''}`}
                            >
                                <span></span>
                                <span></span>
                                <span></span>

                            </button>
                        </div>
                    </nav>



                    <div className="container-fluid">
                        <h1>Darshbord</h1>
                        <div className="dash_main">
                            <div className="row">

                                <div className="col mx-2 d-flex item_client">
                                    <div>

                                        <h5>Users</h5>
                                        <p>500+</p>
                                    </div>
                                    <div>
                                        <img src="myImage/users2.png" alt="" />
                                    </div>
                                </div>

                                <div className="col mx-2 d-flex driver_item">
                                    <div>

                                        <h5>Drivers</h5>
                                        <p>50+</p>
                                    </div>
                                    <div>
                                        <img src="myImage/drivers.png" alt="" />
                                    </div>
                                </div>
                                <div className="col  mx-2 d-flex item_service">
                                    <div>

                                        <h5>Sevices</h5>
                                        <p>2</p>
                                    </div>
                                    <div>
                                        <img src="myImage/service.png" alt="" />
                                    </div>
                                </div>
                                <div className="col mx-2 d-flex item_third">
                                    <div>

                                        <h5>Booking</h5>
                                        <p>10+</p>
                                    </div>
                                    <div>
                                        <img src="myImage/booking.png" alt="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="online_status mt-4">
                            <div className="row">
                                <div className="col online-btn">

                                    <button onClick={driverOnlineAndOfflineHander} className={`${online ? 'active_green' : 'deactive_red'}`} >
                                        {online ?
                                            "Online Car"
                                            : "offline car"}


                                    </button>
                                </div>
                                {/* {online ? 
                                <div className="col online-btn">

                                    <button onClick={driverOnlineAndOfflineHander}> ONLINE CAR</button>
                                </div>
                                :
                                <div className="col offine-btn">
                                    <button onClick={driverOnlineAndOfflineHander}> OFFLINE CAR</button>
                                </div>
                                } */}
                            </div>

                        </div>
                        <div className="online_suggeest mt-2">
                            <div className="row green_online">
                                <li className="box"></li>
                                <li>Your car is online for rent.</li>

                            </div>
                            <div className="row red_online">
                                <li className="box2"></li>
                                <li>Your car is offline anyone not take rent.</li>

                            </div>

                        </div>
                        <div className="Recently_booking">
                            <div className="row">
                                <h5>Recently Booking</h5>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Dashboard;