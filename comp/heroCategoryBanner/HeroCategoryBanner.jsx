import { Grid } from "@mui/material";
import HeroCategoryStyles from "../../styles/heroCategoryBanner.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "../button";

const HeroCategoryBanner = () => {
  return (
    <div className={HeroCategoryStyles.container}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <div className={HeroCategoryStyles.banner_1}>
            <div className={HeroCategoryStyles.conent}>
              <p style={{ color: "#0a472e" }}>
                Discover <br /> Real Organic <br /> Flavors
              </p>
              <div className={HeroCategoryStyles.btn}>
                <Button
                  text={"Shop Now"}
                  Icon={KeyboardDoubleArrowRightIcon}
                  sidebar={false}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={HeroCategoryStyles.banner_2}>
            <div className={HeroCategoryStyles.conent}>
              <p style={{ color: "white" }}>
                Best Honey <br />
                with Premium <br />
                Quality
              </p>
              <div className={HeroCategoryStyles.btn}>
                <Button
                  text={"Shop Now"}
                  Icon={KeyboardDoubleArrowRightIcon}
                  sidebar={false}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={HeroCategoryStyles.banner_3}>
            <div className={HeroCategoryStyles.conent}>
              <p style={{ color: "white" }}>
                Detox with <br />
                Green Vegetables <br />
                and Fruits
              </p>
              <div className={HeroCategoryStyles.btn}>
                <Button
                  text={"Shop Now"}
                  Icon={KeyboardDoubleArrowRightIcon}
                  sidebar={false}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroCategoryBanner;
