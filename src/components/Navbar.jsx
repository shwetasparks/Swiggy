import Logo from '../assets/logo.svg';
import DownArrow from '../assets/down-arrow.png';
import Corporate from '../assets/corporate.svg';
import search from '../assets/search.svg';
import offer from '../assets/offer.svg';
import help from '../assets/help.svg';
import signin from '../assets/signin.svg';
import shop from '../assets/market.png';
import { Outlet,Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
       <div className="w-full shadow-md h-20 flex center justify-center  ">
            <div className=" w-full max-w-[90%] flex  justify-between border border-black ">
                {/* logo */}
                <div className="flex  items-center py-1 gap-4">
                    <Link to={"/"}>
                    <img src={Logo} className="w-20 h-14 " />
                    </Link>
                    
                    <p className="font-bold border-b-2 border-black text-sm">
                        Other
                    </p>
                    <img src={DownArrow} className="w-3 mx-2" />
                </div>

                {/* nav contents */}
                <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center gap-1">
                        <img src={Corporate} alt="" />
                        <p className="text-base font-semibold">
                            Swiggy Corporate
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src={search} alt="" />
                        <p className="text-base font-semibold">Search</p>
                    </div>

                    <div className="flex items-center gap-1 ">
                        <img src={offer} alt="" />
                        <p className="text-base font-semibold">Offers</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src={help} alt="" />
                        <p className="text-base font-semibold">Help</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src={signin} alt="" />
                        <p className="text-base font-semibold">Sign In</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src={shop} className="w-5" />
                        <p className="text-base font-semibold">Cart</p>
                    </div>
                </div>
            </div>
        </div>
   
   {/* have to add in parent route */}
        <Outlet/>   
        
        </>
        
    );
}

export default Navbar;
