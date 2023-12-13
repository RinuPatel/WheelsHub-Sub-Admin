import { Link } from "react-router-dom";
import './index.css'
import { useState ,useRef} from "react";
import Cropper from 'react-cropper';

const ProfilePhoto = () => {
    const [image, setImage] = useState(null);
    const [cropData, setCropData] = useState(null);
    const cropperRef = useRef(null);

    const handalerImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result)
            };
            reader.readAsDataURL(file)
        }

        
    }
    const handleCrop = () => {
        if (cropperRef.current) {
          setCropData(cropperRef.current.getCroppedCanvas().toDataURL());
        }
      };
    return (
        <>
            <nav className='navber nav-width'>
                <Link to="" className='nav-link'>CarRentZone</Link>
            </nav>
            <div className="profile-photo">
                <Link to="/user-detail" className="upload"><img src="myImage/arrow back.svg" alt="" /></Link>
                <h2>Upload Profile Photo</h2>
                <span>Click Button And Upload Here Your Profile Photo</span>
                <div>
                    {image ?
                        <div>
                            <img src={image} alt="not found" className="image-profile" />
                            {/* <p>Preview</p> */}
                            {/* <Cropper
                                // ref={cropperRef}
                                src={image}
                                style={{ height: 400, width: '100%' }}
                                aspectRatio={16 / 9}  // You can set the aspect ratio as per your requirement
                                guides={true}
                                crop={handleCrop}
                            />
                            {cropData && (
                                <div>
                                    <h2>Cropped Image:</h2>
                                    <img src={cropData} alt="Cropped Preview" style={{ maxWidth: '100%' }} />
                                </div>
                            )} */}
                        </div>
                        :
                        <img src="myImage/avtar.png" alt="not found" className="avtar" />
                    }
                    <div>
                        <label htmlFor="img-upload" className="upload-lable">Upload Photo</label>
                        <input type="File" id="img-upload" style={{ display: "none" }} onChange={handalerImage} />
                    </div>
                    <button className="next-btn-profile">Next</button>
                </div>
            </div>
        </>
    )
}
export default ProfilePhoto; 