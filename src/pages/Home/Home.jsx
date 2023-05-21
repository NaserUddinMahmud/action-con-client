import Banner from "./Banner";
import Brands from "./Brands";
import Category from "./Category";
import Gallery from "./Gallery";
import Services from "./Services";


const Home = () => {
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Gallery></Gallery>
            <Services></Services>
            <Category></Category>
            <Brands></Brands>
        </div>
    );
};

export default Home;