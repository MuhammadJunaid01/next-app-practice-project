import Link from "next/link";
import { useRouter } from "next/router";
import FooodsStyle from "../../styles/foods.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Grid } from "@mui/material";
import Carousel from "better-react-carousel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Foods = ({ data }) => {
  console.log("data", data);
  const router = useRouter();
  const handleLink = (id) => {
    console.log("id", id);
    // router.push(id);
  };
  return (
    <div className={FooodsStyle.foods_container}>
      <div className={FooodsStyle.foods_content}>
        <Carousel
          containerStyle={{ padding: "0px 50px" }}
          dotColorActiv="black"
          autoplay={5000}
          cols={5}
          rows={1}
          gap={10}
          loop
        >
          {data.map((data, index) => {
            return (
              <Carousel.Item>
                <div
                  onClick={() => handleLink(index)}
                  className={FooodsStyle.foods_item}
                  key={index}
                >
                  <div>
                    <img className={FooodsStyle.img} src={data.img} alt="img" />
                  </div>
                  <Link href={`foods/${data.id}`}>
                    <a href="">
                      <div style={{ padding: "20px" }}>
                        <p className={FooodsStyle.food_item_name}>
                          {data.title}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <div className={FooodsStyle.hover_icon}>
                    <p>
                      <RemoveRedEyeIcon />
                    </p>
                    <p>
                      <SyncAltIcon />
                    </p>
                    <p>
                      <FavoriteIcon />
                    </p>
                  </div>
                  <button className={FooodsStyle.add_cart_btn}>
                    Add To Cart
                  </button>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Foods;
