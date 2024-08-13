import star from "../assets/star.png"

function RestuarantCard({info}) {
   return (
      <>
   <div className='min-w-[295px] h-[182px]  relative group'>
      <img className='w-full h-full rounded-2xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info?.cloudinaryImageId} />
      <div className='bg-gradient-to-t from-black from-10% to-transparent to-40% rounded-xl  absolute h-full w-full top-0 hover:none'> </div>
      <p className='absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold'>{info.aggregatedDiscountInfoV3?.header + " " + info.aggregatedDiscountInfoV3?.subHeader}</p>
  </div>

  <div className='m-4 '>
      <h2 className='font-bold text-xl'>{info?.name}</h2>
      <p className='text-xl flex justify-start items-center '><img className='bg-green-600  p-1 mx-1 rounded-full w-5 'src={star}/>{info?.avgRating} <p className='pb-2 text-xl font-extrabold px-1'>.</p> <span className='font-bold text-lg'> {info?.sla?.slaString}</span></p>
      <p className='text-lg font-medium font-gilroy text-gray-500 line-clamp-1 '>{info.cuisines}</p>
      <p className='text-lg font-medium text-gray-500'>{info?.locality} </p>
  </div>
      </>
   
   )
}

export default RestuarantCard
