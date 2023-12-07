import React from "react"
import Navbar from "./Navbar";
import Upperbody from "./Upperbody";
import { ImgComponent } from "./Imgs";
const Home = () =>{
    return(
<>
<div className="overflow-x-hidden">
<Navbar></Navbar>
<Upperbody></Upperbody>
<ImgComponent/>
</div>

</>
    )
}

export default Home