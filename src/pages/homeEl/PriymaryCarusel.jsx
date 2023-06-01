

import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      autoplay: true,
      speed: 6,
      autoplaySpeed: 5000,
      pauseOnHover: false,
    };
    return (
      <div className="primary-carusel max-w-[1500px] mx-auto mt-[-20px] ">
        <Slider {...settings}>
          <div>
          <div className="pictures p1"></div>
          </div>
          <div>
         <div className="pictures p2"></div>
          </div>
          <div>
         <div className="pictures p3"></div>
          </div>
         
        </Slider>

        
<div className="max-w-[1000px] mx-auto flex flex-col items-center">
  <h2 className="title-sch">97-sonli Umumiy o’rta ta’lim maktabi</h2>
  <div className="batafsil">Batafsil / Подробно</div>
</div>
      </div>
    );
  }
}