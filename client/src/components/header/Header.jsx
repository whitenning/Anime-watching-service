import React from "react";
import './header.css'
import Carousel from '../carousel/Carousel'
import { carouselImages } from "../carousel/Carouselimg";
import Ongoings from '../ongoing/Ongoing.jsx'
import Trendings from "../trendings/Trendings.jsx";
import Discover from '../discover/Discover'


const Header = () => {
    return (
        <div className="header__section" id="header">
            <div className="carousel-div"><Carousel slides = {carouselImages}/></div>
            <div className="ongoing-div"><Ongoings /></div>
            <div className="trending__div"><Trendings /></div>
            <div className="discover-div"><Discover /></div>
        </div>
    )
}



export default Header