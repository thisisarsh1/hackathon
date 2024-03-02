import React from "react";
import bg_img1 from '/public/Group-1.svg';
import bg_img2 from '/public/Group-2.svg';
import bg_img3 from '/public/Group.svg';
import'/src/styles/Background.css'

 function Bgimg(){
return(
<div className="bg_img">
<div className="bg_side1">
<img src={bg_img1} ></img> 
    </div>
    
    <div className="bg_side2">
     <img src={bg_img2} ></img>   
    </div>
    
    <div className="bg_side3">
     <img src={bg_img3} ></img>   
    </div>
</div>
)
 }
 export default Bgimg