import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import greenstar from "../assets/greenstar.png";

function RestuarantMenu() {
   const { id } = useParams();
   // console.log("this is id here",id.split("-").at(-1));
   let mainId = id.split("-").at(-1)

   const [menuData, setMenuData] = useState(" ")
   const [resInfo, setResInfo] = useState([])
   const [discountData, setDiscountData] = useState([])
   // console.log(" res info is :-", resInfo);

   async function fetchMenu() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER `)
      let res = await data.json();

      console.log(res?.data?.cards[4]?.groupedCard?.groupedCard?.cardGroupedMap?.REGULAR?.cards[1]?.card?.card);
      setResInfo(res?.data?.cards[2]?.card?.card?.info)
      setMenuData(res?.data?.cards[4]?.groupedCard?.groupedCard?.cardGroupedMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
      setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
   }
   useEffect(() => {
      fetchMenu();
   }, [])
   // console.log(" res info is :-", resInfo);
   return (
      <div className="w-full  ">
         <div className="  w-[42%]  mx-auto py-6 px-2">
            <p className="font-light text-xs text-gray-500 cursor-pointer"><span className="hover:text-black"><Link to={"/"}><span >Home</span></Link></span>  / <Link to={"/"}> <span className="hover:text-black"> {resInfo.city}</span> </Link> /  <Link to={"/"}><span className="hover:text-black">{resInfo.name} </span></Link></p>
            <h1 className="font-bold pt-10 text-2xl">{resInfo?.name}</h1>

            <div className="w-full h-[230px]  mt-4 rounded-3xl bg-gradient-to-t from-gray-300/70 px-4 pb-4  ">
                <div className="w-full border border-gray-300 rounded-3xl bg-white h-full ">
                  <div className="p-4 w-full ">
                      <div className="flex justify-start gap-3 items-center font-bold text-xl ">
                  <img className="w-6" src={greenstar} alt="star" />
                     <p>{resInfo?.avgRating}</p>
                     <p>({resInfo?.totalRatingsString})</p>
                     <p className="text-gray-500 pb-2">.</p>
                     <p>{resInfo?.costForTwoMessage}</p>
                  </div>
                  <p className="hover:cursor-pointer text-orange-600 font-bold underline">
                  {resInfo?.cuisines?.length > 0 ? resInfo.cuisines.join(",") : ""}
                  </p>

                  <div className="flex  mt-2 border border-black">
                   <div className="flex flex-start gap-3  ">
                   <div className="w-[9px] flex flex-col justify-center items-center ">
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full "></div>
                          <div className="w-1 h-[20px] text-gray-300">|</div>
                          <div className="w-[8px] h-[8px] bg-gray-300 rounded-full "></div>
                     </div>
                     <div className="flex gap-2 flex-col">
                        <p className="font-bold  mr-2">Outlet {"   "  }  <span className="font-normal text-gray-600">{resInfo.locality}</span></p>
                        <p className="font-bold">{resInfo?.sla?.slaString}</p>
                     </div>
                   </div>
                  </div>
                  </div>
                <hr className="" /> 
                <div className="flex justify-start items-center p-3 ">
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_30,h_30/" + resInfo?.feeDetails?.icon  }/>
                  {
                      resInfo.length !==0?   <span className="font-semibold text-gray-600">{(resInfo?.expectationNotifiers[0]?.enrichedText)}</span>:""
                  }
                </div>  
                </div>
            </div>
         </div>
      </div>
   )
}
export default RestuarantMenu;


