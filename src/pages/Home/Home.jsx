import Banner from "./Banner";
import Category from "./Category";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;