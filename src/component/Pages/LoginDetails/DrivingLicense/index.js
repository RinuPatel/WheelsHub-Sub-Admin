import { Link } from "react-router-dom";
import CustomInput from '../../../Element/CustomInput'
import './index.css'
import { useState } from "react";

const DrivingLicense = () => {
    const [licenceNum, setLicenceNum] = useState("")

    const licenceNumber = (e) => {
        try {
            const numberVal = e.target.value.replace(/(.{4})/g, '$1 ').trim()
            setLicenceNum(numberVal)
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <nav className='navber nav-width'>
                <Link to="" className='nav-link'>CarRentZone</Link>
            </nav>
            <div className="license-frame">
                <Link to="/user-detail" className="upload"><img src="myImage/arrow back.svg" alt="" /></Link>
                <h2>Enter your licence number and date of birth</h2>
                <div className="img-icon">
                    <img src="myImage/driver.png" alt="not found" />
                </div>
                <div className="input-licence">
                    <label htmlFor="">Licence Number</label>
                    <CustomInput
                        placeholder="DL00 00000000000"
                        className="licen-num"
                        onChange={licenceNumber}
                        value={licenceNum}
                    >
                    </CustomInput>

                    <label htmlFor="">Date Of Birth</label>
                    <CustomInput type="date" className="licen-num" />
                    <button className="btn-licence">Submit</button>
                </div>
            </div>
        </>
    )
}
export default DrivingLicense; 