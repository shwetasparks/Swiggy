import leftarrow from '../assets/leftarrow.png';
import rightarrow from '../assets/rightarrow.png';
import { useState, useEffect } from 'react';

function OnYourMind() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(0);

    function handlePrev() {
        setValue(value - 32);
    }

    function handleNext() {
        setValue(value + 32);
    }

    async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const result = await data.json();
        setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='mb-10'>
            <div className="flex justify-between  gap-3 mx-2 my-1 border-border-black">
                <p className="text-2xl font-extrabold">What's on your mind?</p>
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

            <div
                style={{ translate: `-${value}%` }}
                className="  flex   duration-1000 "
            >
                {data.map((item) => (
                    <img
                        className="w-36"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default OnYourMind;