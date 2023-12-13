import './index.css'
import { Link } from 'react-router-dom';


const SignWith = () => {
    return (
        <>
            <div className="maintant-frame">
                <p className='head-title'>Sign up begin your journey with CarRentZone and start  earning</p>
                <img src="myImage/p6.jpg" alt="" className='img-back' />

                <Link to="/register-number"><button className='btn-phone'>Continue With phone number</button></Link>
                <div>

                 <button className='btn-google'><img src="myImage/google-logo.svg" alt="" className='mx-3'/><Link to="/">Google</Link></button>   
                </div>
               

            </div>
        </>
    )
}
export default SignWith;