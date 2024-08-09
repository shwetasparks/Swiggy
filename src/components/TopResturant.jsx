import { useState ,useEffect} from "react";
import rightarrow from '../assets/rightarrow.png';
import leftarrow from '../assets/leftarrow.png';


function TopResturant() {


    const [value, setValue] = useState(0);
    const [data,setData]=useState([]);

    function handlePrev() {
        setValue(value - 32);
    }

    function handleNext() {
        setValue(value + 32);
    }

        async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const result = await data.json();
        console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="mt-10">
          <div className="flex justify-between  gap-3 mx-2 my-1 border-border-black">
                <p className="text-2xl font-extrabold">Top resturant chains in Chandigarh*</p>
                <div className="flex gap-4 m-1 ">
                    <img
                        onClick={handlePrev}
                        className={
                            ` rounded-full  w-8 p-1  cursor-pointer  ` +
                            (value <= 0 ? 'text-red-300' : 'text-gray-500')
                        }
                        src={leftarrow}
                    />
                    <img
                        onClick={handleNext}
                        className="bg-gray-200 rounded-full w-8 p-1  cursor-pointer"
                        src={rightarrow}
                    />
                </div>
            </div>


            
        </div>
    )
}

export default TopResturant
