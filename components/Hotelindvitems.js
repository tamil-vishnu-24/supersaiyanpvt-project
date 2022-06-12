
import hotelitemsStyles from "../styles/Hotelitems.module.css"
import Link from "next/link"

function hotelindv({hoteldetail})
{
    return (
        <Link href = "/hoteldetails/[id]" as = {`/hoteldetails/${hoteldetail.id}`}>
            <a className = {hotelitemsStyles.card}>
                <h2>{hoteldetail.hotelName}</h2>
                <h3>&rarr;</h3>
            </a>
        </Link>

    )
    
}
export default hotelindv ;