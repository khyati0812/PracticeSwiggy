import React from "react";
import resObj from "../utils/mockData";
const RestaurantCard = (props) => {
//     console.log(props);
        const { resData } = props;
        console.log(resData);
        return(
        <div className="border">
        <img className="imge" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
           
                <h1>{resData.info.name}</h1>
                <h2>{resData.info.avgRating}stars</h2>
                <h2>{resData.info.costForTwo}</h2>
        </div>)
         {/* <div className="border">
        <img className="imge" src="https://media.istockphoto.com/id/458712729/photo/sign-of-burger-king-in-liverpool.jpg?s=612x612&w=0&k=20&c=23TYrL2d1URwD3dsafy1y-HGxteefEVs8PMkPm6jhRQ="/>
            
                <h1>Burger King</h1>
                <h2>2.8stars</h2>
                <h2>$90 for two</h2>
        </div>
         <div className="border">
        <img className="imge" src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal.804a46d55f8bad9e3d598fa4907acea0.1.jpg"/>
            
                <h1>Pizza Hutt</h1>
                <h2>2.9stars</h2>
                <h2>$9 for two</h2>
        </div>
        <div className="border">
        <img className="imge" src="https://assets.turbologo.com/blog/en/2019/07/19085119/mcdonalds-famous-logo.jpg"/>
            
                <h1>Mc Donalds</h1>
                <h2>4.5stars</h2>
                <h2>$23 for two</h2>
        </div>
        <div className="border">
        <img className="imge" src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/x/i/p5197-15542712555ca44c176aa5d.jpg?w=400"/>
            
                <h1>Hira Sweets</h1>
                <h2>4.8stars</h2>
                <h2>$230 for two</h2>
        </div>
        <div className="border">
        <img className="imge" src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/x/i/p5197-15542712555ca44c176aa5d.jpg?w=400"/>
            
                <h1>Hira Sweets</h1>
                <h2>4.8stars</h2>
                <h2>$230 for two</h2>
        </div>
        <div className="border">
        <img className="imge" src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/x/i/p5197-15542712555ca44c176aa5d.jpg?w=400"/>
            
                <h1>Hira Sweets</h1>
                <h2>4.8stars</h2>
                <h2>$230 for two</h2>
        </div>
        <div className="border">
        <img className="imge" src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/x/i/p5197-15542712555ca44c176aa5d.jpg?w=400"/>
            
                <h1>Hira Sweets</h1>
                <h2>4.8stars</h2>
                <h2>$230 for two</h2>
            </div>
    </div>) */}
}
export default RestaurantCard;