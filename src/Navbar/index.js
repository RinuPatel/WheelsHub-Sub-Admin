
import './index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import 'react-image-crop/dist/ReactCrop.css';

function Navbar() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [previewImage, setPreviewImage] = useState()
    
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 });

    // const [loginPage,setLoginPage] = useState(false);
    // const handlerLogin = () =>{
    //     setLoginPage(true);
    // }
    const handleSidebarToggle = () => {
        setIsSidebarActive(prevState => !prevState);
    };

    const handlerProfilePicture = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result)
            };
            reader.readAsDataURL(file)
        }
    }
    return (
        <>
            <div class="wrapper">
                {/* <!-- Sidebar Holder --> */}

                <nav id="sidebar" className={isSidebarActive ? 'active' : ''}>
                    <div class="sidebar-header">
                        {/* <div>
                            <label className="profile-frame" htmlFor="picture__input_">
                                <div className='picture_image'>
                                    {previewImage ? (
                                        <div>
                                            <img src={previewImage} alt="" className="profile-frame" />
                                        </div>
                                    ) : 
                                    <div>
                                        <center style={{ marginTop: "20px" }}>
                                            <FontAwesomeIcon icon={faCloudArrowUp} size='2x' />
                                            <p>Profile</p>
                                        </center>
                                    </div>
                                    }

                                </div>
                            </label>
                            <input type="file"
                                name=""
                                id="picture__input_"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handlerProfilePicture}
                            />
                        </div> */}

                        <h6>User Name</h6>

                    </div>

                    <ul class="list-unstyled components">
                        {/* <p>Dummy Heading</p> */}
                        <li class="active" className={isSidebarActive ? 'active' : ''}>
                            <li>

                                <Link to="/infox">Inbox</Link>
                            </li>
                            <li>

                                <Link to="/share-car">Share Cars</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                            <li>
                                <Link to="#">Your Vahicals</Link>
                            </li>
                            <Link to="#homeSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                            >Account
                            </Link>
                            <ul class="collapse list-unstyled" id="homeSubmenu" >
                                <li>
                                    <Link to="#">Home 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Home 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Home 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>

                            <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle">Pages</Link>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <Link to="#">Page 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Page 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Page 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            {/* <button className='btn-item' onClick={handlerLogin}>Login</button> */}
                            <Link to="/login">Login</Link>
                        </li>

                    </ul>


                </nav>

                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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