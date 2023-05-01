import Container from "../components/Container";
import Navbar from "../components/Navbar";
import bannerImg from "/images/banner.png"


const Home = () => {
    return (
        <div className="relative">
            <div className="before:content-[''] w-full h-screen relative before:absolute before:bg-[#000000bb] before:top-0 before:right-0 before:left-0 before:bottom-0 ">
                <img className="h-screen w-full" src={bannerImg} alt="" />
            </div>
            <Container>
                <Navbar />  
                <section className="text-white absolute top-[70px] flex  h-[80vh]">
                    <div className="flex justify-center flex-col md:w-[30%]">
                        <h2 className="text-[70px] font-bold whitespace-nowrap">Cox's bazar</h2>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    </div>
                    <div className="w-[70%]">

                    </div>
                </section>              
            </Container>
        </div>
    );
};

export default Home;