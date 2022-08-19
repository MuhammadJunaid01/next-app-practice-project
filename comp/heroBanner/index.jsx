import HeroStyles from "../../styles/heroBanner.module.css";
import heroImage1 from "../../public/heroBanner-1.jpg";
import heroImage2 from "../../public/heroBanner-2.jpg";
import heroImage3 from "../../public/heroBanner-3.jpg";
import { useSelector } from "react-redux";
const HeroBanner = () => {
  const { counter } = useSelector((state) => state.inc);
  return (
    <div className={HeroStyles.container}>
      <h1>{counter}</h1>
    </div>
  );
};

export default HeroBanner;
