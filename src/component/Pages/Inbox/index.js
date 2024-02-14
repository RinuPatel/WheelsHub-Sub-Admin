import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../../Navbar";
import NavbarTopFirst from "../../../NavbarTopFirst";
import "./index.css"
import FetchApi from "../../../constants/FetchApi";
import AppConfig from "../../../constants/AppConfig";

const Inbox = () => {
    const API_BASE_URL = AppConfig.API_BASE_URL
    const [reqData, setReqData] = useState()
    const [statusPadding, setStatusPadding] = useState()


    let statusType = []
    const handlerBookingReq = async () => {
        try {
            const res = await FetchApi("car-booking-request", "", {
                method: "GET"
            })
            console.log("my resposs ==>", res);
            if (res.status === 200) {
                const responseData = res.data;
                setReqData(responseData);

                responseData.map((element, index) => {
                    setStatusPadding(element.status)
                    statusType.push(element.status)

                })
                const uniquePaddingStatus = [...new Set(statusType.filter(status => status === 'pending'))];
                const statusCount = uniquePaddingStatus.reduce((count, status) => {
                    count[status] = (count[status] || 0) + 1;
                    return count;
                }, {});
                console.log("req for booking", statusCount);
                setStatusPadding(statusCount.pending)
            }

        } catch (error) {
            console.log(error);
        }
    }


    const handlerBookingStatus = async (id, status) => {
        try {
            // const currentURL = window.location.href.split('?')[0];
            // window.history.pushState({ path: currentURL }, '', `${currentURL}?q=${id}`);
            //   const api =   API_BASE_URL+"car-booking-status?bookId"+id
            const updateStatus = { status: status }
            const result = await FetchApi('car-booking-status?bookId=' + id, updateStatus, {
                method: 'PATCH'

            })
            console.log(updateStatus);
            console.log("my booking id ==>", result);

        } catch (error) {
            console.log(error);
        }
    }

    const getBookingCategory = (bookingDate) => {
        const now = new Date();
        const bookingDateTime = new Date(bookingDate);

        // Check if the booking date is today
        if (
            bookingDateTime.getDate() === now.getDate() &&
            bookingDateTime.getMonth() === now.getMonth() &&
            bookingDateTime.getFullYear() === now.getFullYear()
        ) {
            return 'Today';
        }

        // Check if the booking date is yesterday
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        if (
            bookingDateTime.getDate() === yesterday.getDate() &&
            bookingDateTime.getMonth() === yesterday.getMonth() &&
            bookingDateTime.getFullYear() === yesterday.getFullYear()
        ) {
            return 'Yesterday';
        }

        return bookingDateTime;
    };
    function formatDate(date) {
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);

        return `${day}-${month}-${year}`;
    }

    useEffect(() => {
        handlerBookingReq()
    }, [])



    return (
        <>
            <div className="contect-body">
                {/* <NavbarTopFirst /> */}
                <div className="nav-content">
                    <div>
                        <Navbar statusCount={statusPadding} />
                    </div>
                    <div className="sub-content">

                        <h1>Inbox</h1>
                        <div className="msg-box my-2 mx-2">
                            <table border="1"  >
                                <tr className="mx-2 my-2">
                                    <th className="mx-2">From</th>
                                    <th>PickupDate</th>
                                    <th>pickupTime</th>
                                    <th>DropDate  </th>
                                    <th>DropTime</th>
                                    <th>Price</th>
                                    <th>TotalPrice</th>
                                    <th>Customer Phone</th>
                                    <th>Vehical</th>
                                    <th colSpan={2}>Request</th>
                                </tr>
                                {Array.isArray(reqData) && reqData.length > 0 && reqData.sort((a, b) => {
                                    return b.pickupDate.localeCompare(a.pickupDate) || b.pickupTime.localeCompare(a.pickupTime)
                                })
                                    .map((element, index) => {
                                        const bookingCategory = getBookingCategory(element.pickupDate);
                                        return (
                                            <React.Fragment key={`booking_${index}`}>
                                                <>
                                                    {index === 0 || bookingCategory !== getBookingCategory(reqData[index - 1].pickupDate) ? (
                                                        <tr key={`heading_${index}`}>
                                                            <td colSpan="11" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                                                {bookingCategory === 'Today' || bookingCategory === 'Yesterday'
                                                                    ? bookingCategory
                                                                    : formatDate(new Date(bookingCategory))} Booking
                                                            </td>
                                                        </tr>
                                                    ) : null}


                                                    <tr className="my-2" key={element._id}>
                                                        <td>{element.from}</td>
                                                        <td>{new Date(element.pickupDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
                                                        <td>{element.pickupTime}</td>
                                                        <td>{new Date(element.DropDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
                                                        <td>{element.dropTime}</td>
                                                        <td>{element.price}</td>
                                                        <td>{element.totalPrice}</td>
                                                        <td style={{ padding: "4px" }}>{element.phoneNo}</td>
                                                        <td style={{ padding: "10px" }}> {element.vehicalNo}</td>
                                                        {element && element.status === 'Accepted' ?
                                                            (<button type="" className="btn btn-success" >Booked</button>)
                                                            : element && element.status === 'Cancel' ?
                                                                (<button type="" className="btn btn-danger" >Cancel</button>) :
                                                                <>
                                                                    <td style={{ padding: "4px" }}><button type="" className="btn btn-success" onClick={(e) => { handlerBookingStatus(element._id, 'Accepted') }}>Accepted</button></td>
                                                                    <td style={{ padding: "4px" }}><button type="" class="btn btn-danger" onClick={(e) => { handlerBookingStatus(element._id, 'Cancel') }}>Cancel</button></td>
                                                                </>
                                                        }



                                                    </tr>

                                                </>
                                            </React.Fragment>
                                        )
                                    })}
                            </table >
                        </div >


                    </div>
                </div>
            </div>
        </>
    )
}
export default Inbox;
