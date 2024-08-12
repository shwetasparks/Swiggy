import { useState } from 'react';
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import star from "../assets/star.png"

function TopResturant({ data }) {
    const [value, setValue] = useState(0)
    // const [data,setData]=useState([])

    function handlePrev() {
        setValue((prev) => prev + 50)
    }
    function handleNext() {
        setValue((prev) => prev - 50)
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
            <div className={`flex mt-4 gap-5 w-full duration-300 `} style={{ translate: `-${value}%` }} border border-red>

                {
                    data.map(({ info }) => (
                        <div className='hover:scale-95 duration-300'>
                            <div className='min-w-[295px] h-[182px]  relative group'>
                                <img className='w-full h-full rounded-2xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info?.cloudinaryImageId} />
                                <div className='bg-gradient-to-t from-black from-10% to-transparent to-40% rounded-xl  absolute h-full w-full top-0 hover:none'> </div>
                                <p className='absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold'>{info.aggregatedDiscountInfoV3?.header + " " + info.aggregatedDiscountInfoV3?.subHeader}</p>
                            </div>

                            <div className='m-4 '>
                                <h2 className='font-bold text-xl'>{info?.name}</h2>
                                <p className='text-xl flex justify-start items-center '><img className='bg-green-600  p-1 mx-1 rounded-full w-5 'src={star}/>{info?.avgRating} <p className='pb-2 text-xl font-extrabold px-1'>.</p> <span className='font-bold text-lg'> {info?.sla?.slaString}</span></p>
                                <p className='text-lg font-medium font-gilroy text-gray-500 line-clamp-1 '>{info.cuisines.join(", ")}</p>
                                <p className='text-lg font-medium text-gray-500'>{info?.locality} </p>
                            </div>
                        </div>


                    ))
                }
            </div>




        </div>
    )
}




export default TopResturant;
