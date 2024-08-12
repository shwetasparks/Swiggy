import OnYourMind from './OnYourMind';
import TopResturant from './TopResturant';
import { useState } from 'react';


function Body() {   
    const [TopRestaurantData, setTopRestaurantData] = useState([]);
    const [onYourMindData, setOnYourMindData] = useState([ ]);


    // fetch data
    async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const result = await data.json();
        setTopRestaurantData( result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    return (
        <div className="w-full  " >
            <div className="w-[78%] mx-auto  overflow-hidden py-2 ">
                <OnYourMind data={onYourMindData} />
                <hr className="border" />
                
                 <TopResturant data={TopRestaurantData} />
                <hr className="border " />
            </div>
        </div>
    );
}

export default Body;
