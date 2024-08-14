import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function RestuarantMenu() {
   const {id} = useParams( );
   // console.log("this is id here",id.split("-").at(-1));
   let mainId = id.split("-").at(-1)
   


 const [menuData,setMenuData]=useState(" ")

   async function fetchMenu(){
      let data= await fetch(  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER ` )
      let res= await data.json()
      console.log(res?.data?.cards[0]?.card?.card?.text);
      setMenuData(res?.data?.cards[0]?.card?.card?.text)
   }
   useEffect(()=>{
      fetchMenu();
   },[])

   
 
   return (
      <div>
         <h1>Restuarant Munu--{mainId} is  {menuData}</h1>
      </div>
   )
}

export default RestuarantMenu

