
import hotelItems from "../../hotelitems.js"
import hotelitemsStyles from "../../styles/Hotelitems.module.css"

import HotelItem from "../components/Hotelitem"
function hotelDetails({hoteldetails})
{
    return(
        <div>
            <h1>Hotel Details</h1>
            <HotelItem hoteldetails = {hoteldetails} />

        </div>
    )
}

export const getStaticProps = async() => {
    const hoteldetails = hotelItems ;

    return {
        props : {
                hoteldetails ,
        } ,
    } 
}

export default hotelDetails ;