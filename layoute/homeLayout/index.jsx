import { Grid } from "@mui/material";
import Button from "../../comp/button";
import layoutImage from "../../public/homeLayoutImage.jpg";
import HomeLayoutStyles from "../../styles/homelay.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const HomeLayout = ({ children }) => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className={HomeLayoutStyles.side_banner_container}>
            <div className={HomeLayoutStyles.side_banner}>
              <div className={HomeLayoutStyles.side_banner_content}>
                <p className={HomeLayoutStyles.side_banner_content_summer_sale}>
                  Summer Sale
                </p>
                <div className={HomeLayoutStyles.side_banner_content_percent}>
                  <p>50</p>
                  <span>Of</span>
                </div>
                <div className={HomeLayoutStyles.all_products}>
                  <p>All Products</p>
                </div>
                <div className={HomeLayoutStyles.side_banner_content_show_up}>
                  <Button
                    text={"Shop Now"}
                    Icon={KeyboardDoubleArrowRightIcon}
                    sidebar={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;
