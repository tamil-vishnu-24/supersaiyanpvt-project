import styles from "../styles/Home.module.css"
import Navbar from "./Navbar"
function Layout({children})
{
    return (
        <>
        <Navbar />
        <div className = {styles.container}>
        <main className = {styles.main}>
           
            {children}
        </main>
           
        </div>
        </>
    )
}

export default Layout ;