import React from "react";
import First from "./First.jsx";
import Second from "./Second";
import Slides from "./Slides";
import Footer from "./Footer.jsx";
import Swiper from "./Swiper.jsx";
import FooterFoot from "./FooterFoot.jsx";

function App(){
    return <div class="mainBody">
        <First />
        <Second />
        <Swiper />
        <Slides />
        <p className="Graymargin"></p>
        <Footer />
        <FooterFoot />
    </div>
}

export default App;