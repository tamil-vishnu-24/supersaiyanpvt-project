import {useRouter} from  'next/router'
import hoteldetails from "../../../hotelitem"
import useSWR from 'swr' ;
import Link from "next/link"
import stylesHotelind from "../../../styles/Hotelind.module.css"


/*export const getStaticPaths = async() =>{

    const paths = hoteldetails.map(item =>{
        return{
            params : { hotelNames : item.id} ,
        } ;
    }) ;
    return{
        paths ,
        fallback : false ,
    };

};

export const getStaticProps = async (ctx) =>{
    /* eslint-env es6 */
    /* eslint-disable no-console */
    /*const hotelName = ctx.params.hotelName ;
    const indHotel = data.filter(item => item.id=== id) ;
    return {
        props : {indHotel} ,
    } ;
};*/
function Hoteldetails()
{
    return(<div>
        <h1>Welcome to our hotel Page</h1>
        <h2>Experience World-class Service at Emirates Palace, Abu Dhabi
This property is a 4-minute walk from the beach. Located on the shores of the Arabian Gulf, overlooking its own private natural bay, Emirates Palace, Abu Dhabi is located on 0.8 mi stretch of private beach. The silver, gold and glass mosaics décor is evocative of Arabia’s rich history of hospitality. This luxury accommodations, with the latest technology and 14 food and beverage outlets to choose from during your stay, offers guests the very best of new and old world charm.</h2>
        <Link className = "link" href = "/">Go Back</Link>
    </div>)
}
/*export const getServerSideProps = async (context) => {
    const hotel = hoteldetails.$(`{context.params.id}`) ;

    return {
        props : {
            hotel
        }
    }

}*/


export default Hoteldetails