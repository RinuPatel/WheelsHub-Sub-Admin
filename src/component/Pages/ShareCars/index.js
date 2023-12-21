import './index.css'
import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Custominput from '../../Element/CustomInput';
import Customlabel from '../../Element/Customlabel';
import CustomButton from '../../Element/CustomButton';
import FetchApi from '../../../constants/FetchApi';
import Navbar from '../../../Navbar';
import NavbarTopFirst from '../../../NavbarTopFirst';
import AppConfig from '../../../constants/AppConfig';

function ShareCars() {
  const BASE_URL = AppConfig.API_BASE_URL
  const [imagePreviews, setImagePreviews] = useState(Array(5).fill(null));
  // const [inputValues, setInputValues] = useState(Array([5]).fill(''));
  const [carName, setCarName] = useState("Maruti")
  const [exteriorColor, setExteriorColor] = useState("Grey")
  const [interiorColor, setInteriorColor] = useState("Black")
  const [makeYear, setMakeYear] = useState("2023-11-03")
  const [registerYear, setRegisterYear] = useState("2023-11-05")
  const [fuelType, setFuelType] = useState("Petrol ")
  const [trasmission, setTrasmission] = useState("Manually")
  const [city, setCity] = useState("Surat")
  const [admidName, setAdmidName] = useState("")
  const [schedule, setSchedule] = useState("")
  const [vehicalNo, setVehicalNo] = useState("AS48FD2516")
  const [seats, setSeats] = useState("")
  const [phone, setPhone] = useState("8569427513")
  const [images, setImages] = useState([])

  const handleImageChange = (index, event) => {
    const file = event.target.files;
    const reader = new FileReader();
    const selectedImages = Array.from(event.target.files);
    var clonesImages = images.slice();
    clonesImages.push(event.target.files[0]);
    console.log("My clonesImages ==>", clonesImages)
    setImages(clonesImages);



    if (file) {
      reader.onloadend = () => {
        const newPreviews = [...imagePreviews];
        newPreviews[index] = reader.result;
        setImagePreviews(newPreviews);
      };
      // const newInputValues = [...inputValues];
      // console.log("my image data", inputValues);

      reader.readAsDataURL(file[0]);
      console.log("file name", file.name);
      // newInputValues[index] = file.name;
    }


  };

  const handlerFromSubmit = async (e, index) => {

    try {
      e.preventDefault()
      console.log("my form");

      const carDetails = new FormData();
      carDetails.append("carName", carName);
      carDetails.append("exteriorColor", exteriorColor);
      carDetails.append("interiorColor", interiorColor);
      carDetails.append("makeYear", makeYear);
      carDetails.append("registerYear", registerYear);
      carDetails.append("fuelType", fuelType);
      carDetails.append("city", city);
      carDetails.append("trasmission", trasmission)
      carDetails.append("vehicalNo", vehicalNo);
      carDetails.append("phone", phone);
      carDetails.append("schedule", schedule);
      carDetails.append("seats", seats);
      images.forEach((image, index) => {
        carDetails.append(`image`, image);
      });
      console.log("My images ===>", images)

      if (carDetails) {
        try {
          const response = await fetch(BASE_URL+"car-list", {
            method: 'POST',
            body: carDetails
          })
          const data = await response.json();
          // const data = await FetchApi("car-list",carDetails,{
          //   method:"POST"
          // })
          console.log("API Response", data);
        }
        catch (error) {
          console.log(error);
        }

      }
      console.log("my form data ==>", carDetails);
    } catch (error) {
      console.log("error in from submit", error);
    }
  }

  return (
    <>
      <NavbarTopFirst/>
          
            
      <div style={{ display: "flex",marginTop:"4rem" }}>
        <div>
            <Navbar />
        </div>
        <div>
          <div className='main-car-contact'>
            <h3 className='head'>Share Your Cars With Us</h3>
            <div className=''>
              <form action="">
                <div className='my-frame-form'>
                  <div class="form-group form-field ">
                    <Customlabel>Car Name</Customlabel>
                    <Custominput
                      placeholder="carname"
                      className="input"
                      value={carName}
                      onChange={(e) => setCarName(e.target.value)}
                    />

                    <Customlabel>Exterioi Colour</Customlabel>
                    <Custominput
                      placeholder="exterioi colour"
                      className="input"
                      value={exteriorColor}
                      onChange={(e) => setExteriorColor(e.target.value)}
                    />

                    <Customlabel>Interior Colour</Customlabel>
                    <Custominput
                      placeholder="interior colour"
                      className="input"
                      value={interiorColor}
                      onChange={(e) => setInteriorColor(e.target.value)}
                    />

                    <Customlabel>MakeYear Date</Customlabel>
                    <Custominput
                      type="date"
                      className="input"
                      value={makeYear}
                      onChange={(e) => setMakeYear(e.target.value)}
                    />

                    <Customlabel>RegisterYear Date</Customlabel>
                    <Custominput
                      type="date"
                      className="input"
                      value={registerYear}
                      onChange={(e) => setRegisterYear(e.target.value)}
                    />

                    <Customlabel>Hire</Customlabel>
                    <select name="" id=""
                      className='input-control input dropdowns'
                      style={{ paddingButton: "1rem" }}
                      value={schedule}
                      onChange={(e) => setSchedule(e.target.value)}
                    >
                      <option value="">select hire</option>
                      <option value="1 houre 10km 50Rs">1 houre 10km 50Rs</option>
                      <option value="1 houre 10km 100Rs">1 houre 10km 100Rs</option>
                      <option value="1 houre 10km 150Rs">1 houre 10km 150Rs</option>
                    </select>
                  </div>

                  <div className='form-field2'>
                    <Customlabel>FuelType</Customlabel>
                    <Custominput
                      placeholder="fuel type"
                      className="input"
                      value={fuelType}
                      onChange={(e) => setFuelType(e.target.value)}
                    />

                    <Customlabel>Trasmission</Customlabel>
                    <Custominput
                      placeholder="tramission"
                      className="input"
                      value={trasmission}
                      onChange={(e) => setTrasmission(e.target.value)}
                    />

                    <Customlabel>City</Customlabel>
                    <select name=""
                      id=""
                      className='input-control input'
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">select city</option>
                      <option value="Surat">Surat</option>
                      <option value="mumbei">mumbei</option>
                      <option value="Bardoli">Bardoli</option>
                      <option value="Ahembadab">Ahembadab</option>
                    </select>

                    <Customlabel>Vehical Number</Customlabel>
                    <Custominput
                      placeholder="XY00XY0000"
                      className="input"
                      value={vehicalNo}
                      onChange={(e) => setVehicalNo(e.target.value)}
                    />

                    <Customlabel>Phone Number</Customlabel>
                    <Custominput
                      type="text"
                      placeholder="Phone Number"
                      className="input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                   
                    <Customlabel>Seats</Customlabel>
                    <select
                      name=""
                      id=""
                      className='input-control input'
                      value={seats}
                      onChange={(e) => setSeats(e.target.value)}
                    >
                      <option value="">Select Seats</option>
                      <option value="5 Seats">5 Seats</option>
                      <option value="6 Seats">6 Seats</option>
                      <option value="7 Seats">7 Seats</option>
                    </select>

                  </div>
                </div>
                <h5 className='img-title'>Image Upload</h5>
                <div className='image-upload' >

                  <div className='image-line' >
                    {imagePreviews.map((imagePreview, index) => (
                      <div key={index}>
                        <label className="picture" htmlFor={`picture__input_${index}`} tabIndex="0" >
                          <div className="picture__image">
                            {imagePreview ? (
                              <div>
                                <img src={imagePreview} alt="Uploaded" className="picture__img" />
                              </div>
                            ) : (
                              <>
                                <div style={{ margin: "0.3rem" }}>
                                  <div>
                                    <center>
                                      <FontAwesomeIcon icon={faUpload} size="2x" />
                                      <p>car image {index + 1}</p>

                                    </center>
                                  </div>

                                </div>
                              </>
                            )}
                          </div>
                        </label>
                        <input
                          type="file"
                          id={`picture__input_${index}`}
                          style={{ display: 'none' }}
                          accept="image/*"
                          multiple
                          onChange={(event) => handleImageChange(index, event)}
                        />

                      </div>
                    ))}
                  </div>
                </div>
                <button className='btn-add' onClick={handlerFromSubmit}>Add Car</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ShareCars