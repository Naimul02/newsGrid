import FeaturedSection from "./FeaturedSection/FeaturedSection";
import Banner from "./Banner/Banner/Banner";
import Sponsors from "./Sponsors/Sponsors";
import News from "../Pages/News/News";
import Another from "./AnotherNews/Another";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* <FeaturedSection></FeaturedSection> */}
      <News></News>
      <Sponsors></Sponsors>
      <Another></Another>
      {/* <Sports></Sports> */}
    </div>
  );
};

export default Home;
