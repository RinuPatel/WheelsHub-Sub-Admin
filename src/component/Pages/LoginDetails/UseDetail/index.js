import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import ProfilePhoto from '../ProfilePhoto'
const UserDetail = () => {
    const [username, setUsername] = useState("")
    const [myImage, setMyImage] = useState(false)
    const name = localStorage.getItem("username")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isAadharNumber, setIsAadharNumber] = useState(false)
    console.log(name);
    useEffect(() => {
        const isProfile = localStorage.getItem("isProfilePhoto")
        const isAadhar = localStorage.getItem("isAadharNumber")
        if (isProfile) {
            setIsSuccess(true)
        }
        if (isAadhar) {
            setIsAadharNumber(true)
        }
    }, [])

    // const handalImageUpload = () => {
    //     console.log("my image");
    //     setMyImage(true)
    // }

    // const onProfileSuccess = (response) => {
    //     console.log("My api success")
    //     setIsSuccess(true)
    // }

    return (
        <>
            <nav className='navber nav-width'>
                <Link to="/" className='nav-link'>CarRentZone</Link>
            </nav>
            <div className='container-frame'>
                <h3>Hi Welcome {name}</h3>
                <p>Here's what you need to do set up your account</p>
                <div className='user-del'>
                    {/* <div onClick={handalImageUpload}>
                        {myImage ? (
                            <ProfilePhoto 
                            onProfileSuccess={onProfileSuccess}
                            />
                        ) :
                            (
                                
                                <article className={isSuccess?"article1 disabled" : "article1"}>

                                    <h6>Profile Photo</h6>
                                    <img src="arrow.png" alt="not found" className='arrow-sign' />
                                </article>
                        
                        )}
                    </div> */}
                    {!isSuccess ? (
                        <Link to="/profile-photo">
                            <article className="article1">

                                <h6>Profile Photo</h6>
                                <img src="arrow.png" alt="not found" className='arrow-sign' />
                            </article>
                        </Link>
                    ) : (
                        <article className="article1 disabled">
                            <div className='blue-line'>

                                <h6>Profile Photo</h6>
                                {/* <img src="arrow.png" alt="not found" className='arrow-sign' /> */}
                            </div>
                            <div className='succees'>
                                <span>Suceess Upload 👍!</span>
                            </div>
                        </article>

                    )
                    }

                    --------------------------------------------------------------------------------
                    {isAadharNumber ? (

                        <article className='article1 disabled'>
                            <h6>Aadhaar Card</h6>
                            {/* <img src="arrow.png" alt="not found" className='arrow-sign' /> */}
                            <div className='succees'>
                                <span>Done 👍!</span>
                            </div>
                        </article>

                    ) : (
                        <Link to="/aadhar-card">
                            <article className='article2'>
                                <h6>Aadhaar Card</h6>
                                <img src="arrow.png" alt="not found" className='arrow-sign' />
                            </article>
                        </Link>
                    )}


                    --------------------------------------------------------------------------------
                    <Link to="/driving-license">
                        <article className='article2'>
                            <h6>Driving License -Front</h6>
                            <img src="arrow.png" alt="not found" className='arrow-sign1' />
                        </article>
                    </Link>
                    --------------------------------------------------------------------------------
                    <Link to="/pan-card">
                        <article className='article2'>
                            <h6>PAN Card</h6>
                            <img src="arrow.png" alt="not found" className='arrow-sign2' />
                        </article>
                    </Link>
                    --------------------------------------------------------------------------------
                </div>
                {/* <table>
                    <tr>
                    <Link to="/profile-photo">
                        <th>Aadhaar Card</th>
                        <th> <img src="arrow.png" alt="not found" className='arrow-sign1' /></th>
                        </Link>
                    </tr>
                    <tr>
                    <Link to="/profile-photo">
                        <th>Aadhaar Card</th>
                        <th> <img src="arrow.png" alt="not found" className='arrow-sign1' /></th>
                        </Link>
                    </tr>
                    <tr>
                    <Link to="/profile-photo">
                        <th>Aadhaar Card</th>
                        <th> <img src="arrow.png" alt="not found" className='arrow-sign1' /></th>
                        </Link>
                    </tr>
                    
                </table> */}
            </div>
        </>
    )
}

export default UserDetail 