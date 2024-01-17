import Footer from "./components/Footer"
import Herobanner from "./components/Herobanner"
import Navbar from "./components/Navbar"
import Productcard from "./components/Productcard"


const { default: Link } = require("next/link")



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herobanner/>
      <Productcard/>
      <Footer/>
      
     
      
      
    </div>
  )
}
