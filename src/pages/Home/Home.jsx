import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Brands from "./Brands";
import Category from "./Category";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-base-200">
      <Helmet>
        <title>ActionCon | Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <Services></Services>
      <Category></Category>
      <Brands></Brands>
    </div>
  );
};

export default Home;
