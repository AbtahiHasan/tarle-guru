
const SliderCard = ({sliderData}) => {
    const {img, name} = sliderData
    return (
        <article className="shadow-inner">
            <img src={img} className="w-[270px] h-[320px]" alt="" />
        </article>
    );
};

export default SliderCard;