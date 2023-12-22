
import './index.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-image-crop/dist/ReactCrop.css';
import FetchApi from '../constants/FetchApi';

function Navbar(props) {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [previewImage, setPreviewImage] = useState()
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 });
    const [isCollapsed, setCollapsed] = useState(false);
    const [userName, setUserName] = useState("")

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
            console.log("my auth user", data);
            if (data.status === 200) {
                setUserName(data.username)
                // props.value = userName
                localStorage.setItem("userName",data.username)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleCheckAuth()
    }, [])
    return (
        <>
            <div class="wrapper">
                {/* <!-- Sidebar Holder --> */}

                <nav id="sidebar" className={isSidebarActive ? 'active' : ''}>
                    <div class="sidebar-header">

                        <h6>Hi {userName}</h6>

                    </div>

                    <ul class="list-unstyled components">
                        {/* <p>Dummy Heading</p> */}
                        <li class="active" className={isSidebarActive ? 'active' : ''}>
                            <li>

                                <Link to="/dashboard"><img src="myImage/house-check.svg" alt="" className='mx-2' /> Dashboard</Link>
                            </li>
                            <li>

                                <Link to="/inbox"><img src="myImage/envelope.svg" alt="" className='mx-2' />Inbox</Link>
                            </li>
                            <li>

                                <Link to="/share-car"><img src="myImage/share-fill.svg" alt="" className='mx-2' />Share Cars</Link>
                            </li>

                            <li>
                                <Link to="/your-cars"><img src="myImage/car-front-fill.svg" alt="" className='mx-2' />Your Vahicals</Link>
                            </li>
                            <li>
                                <Link to="/your-cars"><img src="myImage/car-front-fill.svg" alt="" className='mx-2' />Buy Old Car</Link>
                            </li>


                        </li>
                        <li>
                            <li>

                            <Link to="#"><img src="myImage/person-fill.svg" alt="" className='mx-2' />Account</Link>
                            </li>
                                
                        </li>
                        <li>
                            {/* <button className='btn-item' onClick={handlerLogin}>Login</button> */}
                            <Link to="/login"><img src="myImage/box-arrow-in-right.svg" alt="" className='mx-2' />LogOut</Link>
                        </li>

                    </ul>


                </nav>

                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <nav class="navbar navbar-expand-lg  bg-light">
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



                </div>
            </div>

        </>
    )
}

export default Navbar;