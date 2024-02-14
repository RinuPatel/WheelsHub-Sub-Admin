import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import FetchApi from '../constants/FetchApi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
  const Navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [isToken,setIsToken] = useState(false)

  const cookieToken = Cookies.get('jwt')
  console.log("token",cookieToken);
  const handlerCheckUserAuth = async () => {
    try {
      if (cookieToken) {
        const myRes = await FetchApi("check-auth-phone", "", {
          method: "GET",

        })
        console.log("my res ==>", myRes);
        if(myRes.status === 200){
          setIsToken(true)
          setUsername(myRes.username)
        }

      }
    } catch (error) {
      console.log(error);
    }
  }
  const handlerLogout = async ()=>{
    try {
      if(cookieToken){
        const myRes = await FetchApi("logout-driver","",{
          method:"GET"
        })
        console.log(myRes);
       if( myRes.status === 200){
        setIsToken(false)
        Cookies.remove("jwt")
        Navigate("/home")
       }
        
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
              CarZone
              {/* <img src="/myImage/car-icon2.png" alt="" style={{width:"150px"}} /> */}
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
            {username && (

              <div class="dropdown">
              <button class="dropbtn">{username}</button><img src="myImage/p2.png" alt="" style={{width:"2rem"}}/>
              <div class="dropdown-content">
                <Link href="#" onClick={handlerLogout}>LogOut</Link>
              
              </div>
            </div>
              )} 


          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;