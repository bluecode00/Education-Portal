import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import OurTeachersBox from "../components/Home/OurTeachersBox";
import FeaturesBox from "../components/Home/FeaturesBox";
import TestimonialsBox from "../components/Home/TestimonialsBox";
import FromBlogBox from "../components/Home/FromBlogBox";
import BackToTopButton from "../components/Layout/BackToTopButton";


const HomePage = () => {
  return (
    <div>
      <Hero title="Marmara Portal" />
      <AboutUs />
      <OurTeachersBox />
      <FeaturesBox />
      <TestimonialsBox />
      <FromBlogBox />
      <BackToTopButton />
    </div>
  );
};

export default HomePage;
