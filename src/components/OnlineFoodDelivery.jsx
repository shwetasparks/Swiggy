import RestuarantCard from "./RestuarantCard"


function OnlineFoodDelivery({data}) {
   return (
      <div className="my-2">
            <p className="text-2xl font-extrabold pb-4">Restuarants with online delivery in Chandigarh</p>
        
        <div className="grid grid-cols-4 gap-7">
        {
             data.map(({info,cta:{link}}) => (
                        <div className='hover:scale-95 duration-300'>
                            {/* cut restuarant part from here */}
                            <RestuarantCard {...info} link={link}/>
                        </div>
                    ))
                }
        </div>
      </div>
   )
}

export default OnlineFoodDelivery

