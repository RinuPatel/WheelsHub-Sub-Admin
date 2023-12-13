import { Link } from "react-router-dom";
import './index.css'
import Customlabel from "../../../Element/Customlabel";
import Custominput from "../../../Element/CustomInput";


const PanCard = () => {
    return (
        <>
            <nav className='navber nav-width'>
                <Link to="" className='nav-link'>CarRentZone</Link>
            </nav>
            <div className="main-frame">
                <Link to="/user-detail" className="back-page"><img src="myImage/arrow back.svg" alt="" /></Link>
                <h2>Let's find your PAN card number </h2>
                <img src="myImage/panCard.png" alt="not Found" className="img-pan"/>
                <div className="input-pan">   
                    <Customlabel>PAN Number</Customlabel>
                     <Custominput placeholder="ABCCD1234Z" className="input-num"></Custominput>   
                </div>
                <button className="pan-btn">Submit</button>
            </div>
        </>
    )
}
export default PanCard;