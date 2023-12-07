import React from "react"
import Navbar from "./Navbar";
import Upperbody from "./Upperbody";
import { bookData,ImgComponent } from "./Imgs";
const Home = () =>{
    return(
<>
<Navbar></Navbar>
<Upperbody></Upperbody>
<ImgComponent/>
</>
    )
}

export default Home