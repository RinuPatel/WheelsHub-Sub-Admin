import { Link } from "react-router-dom";
import { useState } from "react";
import './index.css'

const AadharCard = () => {

    const [aadharNumber, setAadharNumber] = useState('');

    const handleAadharChange = (e) => {
        // Remove non-numeric characters from the input
        const sanitizedInput = e.target.value.replace(/\D/g, '');

        // Format the Aadhar number with spaces
        const formattedAadhar = sanitizedInput.replace(/(\d{4})/g, '$1 ');

        // Update the state with the formatted Aadhar number
        setAadharNumber(formattedAadhar);
    };
    return (
        <>
            <nav className='navber nav-width'>
                <Link to="" className='nav-link'>CarRentZone</Link>
            </nav>
            <div className="aadhar-frame">
                <Link to="/user-detail" className="upload"><img src="myImage/arrow back.svg" alt="" /></Link>

                <h2>Let's Find your Aadhar Number </h2>
                <span>Enter your aadhar number and we'll get require infomation. </span>
                <div className="aadhar-icon">
                    <img src="myImage/aadhar_card.png" alt="not found" />
                </div>
                <div className="aahdar-num">

                    <span>Aadhar Number   </span>
                    <input
                        type="text"
                        id="aadharInput"
                        value={aadharNumber}
                        onChange={handleAadharChange}
                        placeholder="xxxx xxxx xxxx"
                        className="input-number"
                    />
                </div>
                <button className="next-btn-aadhar">Next</button>
            </div>
        </>
    )
}
export default AadharCard;