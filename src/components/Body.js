import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import resObj from "../utils/mockData";
const Body = () => {
    
    const [listOfRest, setListOfRest] = useState([]);
    const [searchBtn, setSearchBtn] = useState(' ');
    // useEffect(() => {console.log("Use Effect called") }, []);
    
    useEffect(() => { fetchData(); }, []);
    const fetchData = async() => {
        const data = await fetch( "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.51513849170156&lng=77.20311675220728&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[2].card.card.gridElements);
        // console.log(json.data);
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle);
        // console.log(json.cards);
        // setListOfRest(json.cards.card.card.imageGridCards.info);
        
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(listOfRest);
       
    }
    if (listOfRest?.length == 0)
    {
        return (Shimmer());
        }
    // console.log(listOfRest);
    const filterTopRatedRestaurants = () => {
        const filteredList = listOfRest?.filter((res) =>
            res.info.avgRating > 4);
        // console.log(filteredList);
        setListOfRest(filteredList);
       
        // console.log(filteredList[1]);
    };
    // const searchFunctionality = () => {
    //     const filteredL = listOfRest?.filter((res) =>
    //         res.info.name.includes(searchBtn));
    //     console.log(filteredL);
    //     setListOfRest(filteredL);
       
    //     // console.log(filteredList[1]);
    // };
//    let searchFunctionality = () => {
//         const filteredL = listOfRest?.filter((rest) => {
//             return rest?.info?.name.toLowerCase().includes(searchBtn.toLowerCase());
//         });
//         setListOfRest(filteredL);
//     }
   const searchFunctionality = ()=>{

        console.log(searchBtn);

                     const filteredResturant= listOfRest.filter((res)=>

                     res.info.name.toLowerCase().includes(searchBtn.toLowerCase())

                     );

       console.log(filteredResturant);

       setListOfRest(filteredResturant);

}
    // const searchFunctionality = () => {
    //     console.log(searchBtn);
    //     // const filteredL = [];
    //     // for (let i = 0; i < listOfRest.length; i++)
    //     // {
    //     //     if (listOfRest[i]?.info.name.includes(searchBtn))
    //     //     {
    //     //         console.log(listOfRest[i]);
    //     //         filteredL.push(listOfRest[i]);
    //     //         }
    //     //     }
    //     const filteredL = listOfRest?.filter((rest) => {
    //         console.log(rest.info.name);
    //         // console.log(rest?.info.name.toLowerCase());
    //         // console.log(searchBtn.toLowerCase());
    //         console.log(rest.info.name.toLowerCase().includes(searchBtn.toLowerCase()));

    //         // console.log(rest?.info.name.includes(searchBtn));
    //     });
    //     console.log(filteredL);
    //     setListOfRest(filteredL);
    // };
    // useEffect(() => { }, [ListOfRest]);
    console.log("Body rendered");
    return (<div className="Body">
        <div className="filter">
            <button className="filter-btn" onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
        </div>
        {/* <div className="Rest-card"><RestaurantCard resData={resObj[0]} /></div>
            <div className="Rest-card"><RestaurantCard resData={resObj[1]} /></div>
                <div className="Rest-card"><RestaurantCard resData={resObj[2]} /></div>
                <div className="Rest-card"><RestaurantCard resData={resObj[3]}/>
        </div> */}
        <div className="search"><input type="text" className="search-box" value={searchBtn} onChange={(e) => { setSearchBtn(e.target.value); }} />
            <button onClick={searchFunctionality}>Search</button></div>
        <div className="Rest-card">
            {listOfRest?.map((rest) => (<RestaurantCard key={rest.id} resData={rest} />))}
        </div>
        </div>)
}
export default Body;