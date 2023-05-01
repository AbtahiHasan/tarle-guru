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
            </Container>
            Home
        </div>
    );
};

export default Home;