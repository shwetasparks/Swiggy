import OnYourMind from './OnYourMind';
import TopResturant from './TopResturant';
import { useState,useEffect } from 'react';
import OnlineFoodDelivery from './OnlineFoodDelivery';

function Body() {   
    const [topRestaurantData, setTopRestaurantData] = useState([]);
    const [onYourMindData, setOnYourMindData] = useState([ ]);
 

    // fetch data
    async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const result = await data.json();
        setTopRestaurantData( result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="w-full  " >
            <div className="w-[78%] mx-auto  overflow-hidden py-2 ">
                <OnYourMind data={onYourMindData} />
                <hr className="border" />
                
                 <TopResturant data={topRestaurantData} />
                <hr className="border " />

                <OnlineFoodDelivery data={topRestaurantData}/>
                <hr className="border " />
                
            </div>
        </div>
    );
}

export default Body;
