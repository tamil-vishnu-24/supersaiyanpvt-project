
import Hotelindvitems from "./Hotelindvitems" ;
import hotelitemsStyles from "../styles/Hotelitems.module.css"
function hotelItem({hoteldetails})
{
    return (
        <div  className = {hotelitemsStyles.grid}>
            {hoteldetails.map((hoteldetail) => (
            
                <Hotelindvitems key ={hoteldetail} hoteldetail = {hoteldetail} />

            )) }
            
            </div>
    )
}
export default hotelItem ;