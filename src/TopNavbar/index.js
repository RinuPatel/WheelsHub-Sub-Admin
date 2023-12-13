import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import FetchApi from '../constants/FetchApi';
import { useEffect, useState } from 'react';
function TopNavbar() {
  const [username, setUsername] = useState("")
  const cookieToken = Cookies.get('jwt')
  // console.log("token",cookieToken);
  const handlerCheckUserAuth = async () => {
    try {
      if (cookieToken) {
        const myRes = await FetchApi("check-auth-phone", "", {
          method: "GET",

        })
        console.log("my res ==>", myRes.username);
        setUsername(myRes.username)

      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlerCheckUserAuth()
  })
  return (
    <>
      <nav fixed="top" className='navbar-fixed-top'>
        <div class="navbar  navbar-expand-lg navbar-light bg-light" fixed="top">
          <div className='item-list'>

            <div className="nav-title title-top">
              {/* <img src="myImage/icon-car2.jpg" alt="not found" style={{width:"70%"}}/> */}
              CarRentZone
            </div>
            <div style={{ display: "flex" }} className='contact'>
              <div >
                <img src="myImage/call-logo.png" alt="" style={{ width: "30px" }} />
              </div>
              <div className='mx-2'>
                <h6>contact-us</h6>
                0261-251 425 854
              </div>
            </div>
          </div>
          <div class="nav-links mx-5" >
            { username}
          </div>
        </div>
        <div class="nav" style={{ marginTop: "-2.3%" }}>
          <input type="checkbox" id="nav-check" />
          <div className='nav-title'>
            <h3 className='title'> Drive</h3>
          </div>

          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links" style={{ display: "flex", fontFamily: "Times New Roman" }}>
            <ul>

              {/* <i class="bi bi-search"></i>
              <input type="text" name="" id="" placeholder='Search'/>
              */}
            </ul>
            <Link to="/home" >Dashbord</Link>
            <Link to="/About">AboutUs</Link>
            <Link to="/ContectUs" >ContectUs</Link>

          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;