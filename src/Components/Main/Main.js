import React from 'react';
import './Main.css';
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import  Product from './Product/Product';
import img1 from '../../img/Home-Slider/HelloIMG1671741653825.jpeg'
import img2 from '../../img/Home-Slider/HelloIMG1671741657308.jpeg'
import img3 from '../../img/Home-Slider/HelloIMG1671741659667.jpeg'
import img6 from "../../img/Home-Slider/HelloIMG1671741666997.jpeg";
import img7 from "../../img/Home-Slider/HelloIMG1671741669488.jpeg";

import img8 from '../../img/HomeImg/HelloIMG1671741670927.jpeg';
import img9 from "../../img/HomeImg/HelloIMG1671741670927.jpeg";
import img10 from "../../img/HomeImg/HelloIMG1671741670927.jpeg";
import img11 from "../../img/HomeImg/HelloIMG1671741670927.jpeg";
import img12 from "../../img/HomeImg/HelloIMG1671741670927.jpeg";




function Main() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <CCarousel className="home__image" controls dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={img1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={img2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={img3} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={img6} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={img7} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>

          <div className="home__row">
            <Product
              id="12321341"
              title="Electronics"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main