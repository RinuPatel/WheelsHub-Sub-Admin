import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
const UserDetail = () => {
    const [username,setUsername] = useState("")
        const name = localStorage.getItem("username")
       console.log(name);
    return (
        <>
            <nav className='navber nav-width'>
                <Link to="/" className='nav-link'>CarRentZone</Link>
            </nav>
            <div className='container-frame'>
                <h2>Hi Welcome {name}</h2>
                <p>Here's what you need to do set up your account</p>
                <div className='user-del'>
                    <Link to="/profile-photo">
                        <article className='article1'>

                            <h6>Profile Photo</h6>
                            <img src="arrow.png" alt="not found" className='arrow-sign' />
                        </article>
                    </Link>
                    --------------------------------------------------------------------------------
                    <Link to="/aadhar-card">
                    <article className='article1'>
                        <h6>Aadhaar Card</h6>
                        <img src="arrow.png" alt="not found" className='arrow-sign' />
                    </article>
                    </Link>
                    --------------------------------------------------------------------------------
                     <Link to="/driving-license">   
                    <article className='article2'>
                        <h6>Driving License -Front</h6>
                        <img src="arrow.png" alt="not found" className='arrow-sign1' />
                    </article>
                    </Link>
                    --------------------------------------------------------------------------------
                    <Link to="/pan-card">
                    <article className='article1'>
                        <h6>PAN Card</h6>
                        <img src="arrow.png" alt="not found" className='arrow-sign2' />
                    </article>
                    </Link>
                    --------------------------------------------------------------------------------
                </div>
            </div>
        </>
    )
}

export default UserDetail 