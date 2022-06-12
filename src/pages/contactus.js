import contactStyles from "../../styles/Contactus.module.css"

function contactUs()
{
    return(
    <div className = {contactStyles.container}>
        <h1>CONTACT US</h1>
        <form method = "post">
        
            <label htmlFor = "name">Name</label>
            <input type = "text" name = "name"/>

        
            <label htmlFor = "email">Email</label>
            <input type = "email" name = "email"/>
        
        
            <label htmlFor = "hotelName">Hotel Name</label>
            <input type = "text" name = "hotelName"/>
            <label htmlFor = "hotelName">Feedback</label>
            <input type = "text" name = "feedback"/>
        
        
            
        
            <button>Submit</button>
            
        </form>
        
    </div>)
}

export default contactUs ;