import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from "next/image"


function Home()
{
  return (
    <div>
    <div className = {styles.container}>
    <div className = "image">
      <h1>Welcome</h1>
      <h3>to</h3>
      <h1>Hotel Booking site</h1>
      
        <img className="img1" src = "https://img.lovepik.com/photo/20211120/small/lovepik-the-hotel-lobby-picture_500481487.jpg" />
        {/* <img className="img2" src = "https://img.lovepik.com/photo/20211124/small/lovepik-decoration-of-hotel-lobby-picture_500928541.jpg"/> */}
      </div>
    </div>
    
    </div>
  )
}
 export default Home ;