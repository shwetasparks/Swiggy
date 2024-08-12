import {useState,useEffect} from 'react';
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";

function TopResturant({data}) {
    const [value,setValue]=useState(0)
    // const [data,setData]=useState([])

    function handlePrev(){
        setValue((prev)=>prev+50)
    }
    function handleNext(){
        setValue((prev)=>prev-50)
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
        <div className="my-10 border border-green-600">
        <div className="flex justify-between  gap-3 mx-2 my-1 border-border-blue">
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
          <div className={`flex mt-4 gap-5 w-full duration-300`} style={{translate:`-${value}%`}}  border border-red>

            {
             data.map((item)=>(
            <div className='min-w-[295px] h-[182px] border border-black relative group'>
                 <img className='w-full h-full rounded-2xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.info?.cloudinaryImageId }/>
                 <div className='bg-gradient-to-t from-black from-10% to-transparent to-40% rounded-xl  absolute h-full w-full top-0 hover:none'> </div>
            </div>
             
                ))
            }       
        </div>
        


          
      </div>
  )
}

    
        

export default TopResturant;
