import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="http://www.superedo.net/wallpapers/wallpapers/Insects/Coccinelle/coccinelle_013.jpg" alt="design" />
      <p className="legend">Legend 1<span style={{margin: 10}}><button> Commander</button></span></p>
    </div>
    <div>
      <img src="http://fabfashionfix.com/wp-content/uploads/2014/09/BLU_0026.jpg" alt="design" />
      <p className="legend"><button> Commander</button></p>
    </div>
    <div>
      <img src="http://cocoadiaries.com/wp-content/uploads/2017/06/FUSE-ODG-1-of-1.jpg" alt="design" />
      <p className="legend"><button> Commander</button></p>
    </div>
    <div>
      <img src="https://celebmafia.com/wp-content/uploads/2018/02/kaia-gerber-supermodel-runway-walk-max-mara-fashion-show-in-milan-02-22-2018-2.jpg" style={{width:"640", height:"480"}} alt="design" />
      <p className="legend"><button> Commander</button></p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" alt="design"  />
      <p className="legend"><button> Commander</button></p>
    </div>
    
  </Carousel>
);
