import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import greenstar from "../assets/greenstar.png";
import leftarrow from '../assets/leftarrow.png';
import rightarrow from '../assets/rightarrow.png';
import deal from "../assets/deal.png";
import search from '../assets/search.svg';
import uparrow from "../assets/uparrow.png";
import downarrow from "../assets/downarrow.png";

function handleNext(){
   setValue(value + 32);
}
function handlePrev(){
   setValue(value - 32);
}
function discount(){
   return (
      <div>helo</div>
   )
}
function RestuarantMenu() {
   const { id } = useParams();

   // console.log("this is id here",id.split("-").at(-1));
   let mainId = id.split("-").at(-1)

   const [menuData, setMenuData] = useState([])
   const [resInfo, setResInfo] = useState([])
   const [discountData, setDiscountData] = useState([])
   const [value,setValue]=useState()
   // console.log(" res info is :-", resInfo);
console.log("menu",menuData);



   async function fetchMenu() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER `)
      let res = await data.json();
      setResInfo(res?.data?.cards[2]?.card?.card?.info)

      let actualMenu=(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((data)=> data?.card?.card?.itemCards)
      // console.log("actualmenu",actualMenu);

      setMenuData(actualMenu);
      setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
   }

   useEffect(() => {
      fetchMenu();
   }, [])
   // console.log(" res info is :-", resInfo);
  
   return (
      <div className="w-full   ">
         <div className="  w-[42%]  mx-auto py-6 px-2 border border-black">
            <p className="font-light text-xs text-gray-500 cursor-pointer"><span className="hover:text-black"><Link to={"/"}><span >Home</span></Link></span>  / <Link to={"/"}> <span className="hover:text-black"> {resInfo.city}</span> </Link> /  <Link to={"/"}><span className="hover:text-black">{resInfo.name} </span></Link></p>
            <h1 className="font-bold pt-10 text-2xl">{resInfo?.name}</h1>

            <div className="w-full h-[230px]  mt-4 rounded-3xl bg-gradient-to-t from-gray-300/70 px-4 pb-4 my-6  ">
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
                <div className="flex justify-start items-center p-3 gap-2 ">
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_30,h_30/" + resInfo?.feeDetails?.icon  }/>
                  {
                      resInfo.length !==0?   <span className="font-semibold text-gray-600">{(resInfo?.expectationNotifiers[0]?.enrichedText.replace(/<[^>]*>/g,""))}</span>:""
                  }
                </div>  
                </div>
            </div>

            {/* Deals for you (on your mind) */}
            <div className="w-full overflow-hidden">
            <div className="flex justify-between  gap-3 mx-2 border-border-black my-2 ">
                <p className="text-2xl font-bold mt-4">Deals for you ?</p>
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

            {/* discount cards */}
            <div className="flex  ">
            {
               discountData.map((data)=>(
                  <Discount data={data}/>
               ))
            }
            </div>
            </div>

            {/* menu: search for dishes */}
            <h2 className="text-center font-medium text-gray-500 mt-10">M E N U</h2>
            <div className=" rounded-2xl flex items-center justify-center  h-12 bg-gray-200 mt-4 relative hover:cursor-pointer">
               <p className="font-bold text-gray-500 text-medium ">Search for dishes</p>
               <img src={search} className="w-8 h-8 absolute right-2 p-2"/>
            </div>

            {/* recommended section */}

            <div>
               {
                  menuData.map(({card:{card:{itemCards,title}}})=>(
                      <div>
                        <div className="flex justify-between items-center p-4">
                        <h1 className="font-extrabold text-xl">  {title}({itemCards.length})</h1>
                        <img className="w-5 h-5" src={uparrow} />
                        </div>
                        {/* render */}
                        <div className="m-5">
                        {
                           itemCards.map(({card:{info}})=>(
                              <h1>{info.name}</h1>
                           ))
                        }
                        </div>
                     </div>                  
                  ))
               }
            </div>



         </div>
      </div>
   )
}


//deals
function Discount({data:{info:{header,offerLogo,couponCode}}}){
   //   console.log(info); 
      return(
         <div className="flex items-center border border-gray-300 rounded-2xl m-2 min-w-[328px] h-[76px] px-4 gap-2">
            <img className="w-12 h-12" src={deal}/>
            <div>
               <h2 className="font-extrabold">{header}</h2>
               <p className="font-bold text-gray-400">{couponCode}</p>
            </div>
         </div>
      )
   }

export default RestuarantMenu;


