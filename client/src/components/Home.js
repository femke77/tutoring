import Calendly from "./Calendly";
import ContactBS from "./ContactBS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home({}) {
 
    return (
        <div className="">
            
            <Routes>
            <Route path="/schedule" element={<Calendly />} />
            <Route path="/contact" element={<ContactBS />} />
          
       
           
          </Routes>
           
            {/* <Calendly/> */}
          
        </div>
    )
}

export default Home;