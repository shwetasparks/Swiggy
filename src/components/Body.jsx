import OnYourMind from './OnYourMind';
import TopResturant from './TopResturant';

function Body() {
    return (
        <div className="w-full  ">
            {/* section 1 */}
            <div className="w-[78%] mx-auto  overflow-hidden py-2  ">

                <OnYourMind />
                  <hr className="border " />
                  <TopResturant/>

            

              
            </div>
        </div>
    );
}

export default Body;
