import img1 from "/images/Sreemongol.png"
import img2 from "/images/sundorbon.png"
import img3 from "/images/Sajek.png"
import img4 from "/images/sundorbon.png"
import img5 from "/images/Sajek.png"

import arrowLeft from "/left.png"
import arrowRight from "/right.png"
import SliderCard from "./SliderCard"

const Slider = () => {
    const sliderDatas = [
        {
            img: img1,
            name: "Cox’s  Bazar"
        },
        {
            img: img2,
            name: "Bazar"
        },
        {
            img: img3,
            name: "Cox"
        }
    ]
    return (
        <div className="w-full">
            <div className="flex w-full gap-5 items-center overflow-x-auto">
                {
                    sliderDatas.map((sliderData, index) => <SliderCard key={index} sliderData={sliderData} />)
                }
            </div>
            <div className="flex gap-2 mt-5">
                <div className="bg-white cursor-pointer  rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <img src={arrowLeft} alt="" />
                </div>
                <div className="bg-white cursor-pointer  rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slider;