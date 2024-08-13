import { useState } from 'react';
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import RestuarantCard from './RestuarantCard';

function TopResturant({ data }) {
    console.log("this is data",data);
    
    const [value, setValue] = useState(0)
    // const [data,setData]=useState([])

    function handlePrev() {
        setValue((prev) => prev + 40)
    }
    function handleNext() {
        setValue((prev) => prev - 40)
    }

    // fetch function
    // async function fetchData(){
    //     const data = await fetch(
    //         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    //     );
    //     const result=await data.json();
    //     setData(result?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)

    //     console.log(result?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);

    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])
    return (
        <div className="my-10  border border-green-600 px-3">
            <div className="flex justify-between  gap-3 mx-2 my-1">
                <p className="text-2xl font-extrabold">Top resturant chains in Chandigarh</p>
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
                        className="bg-gray-200 rounded-full w-8 p-1 cursor-pointer"
                        src={rightarrow}
                    />
                </div>
            </div>
            <div className={`flex mt-4 gap-5 w-full duration-300 `} style={{ translate: `-${value}%` }}>

                {
                    data.map(({info}) => (
                        <div className='hover:scale-95 duration-300'>
                            {/* cut restuarant part from here */}
                            <RestuarantCard info={info}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}




export default TopResturant;
