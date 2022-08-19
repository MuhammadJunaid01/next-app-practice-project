import { Grid } from "@mui/material";
import Button from "../../comp/button";
import HomeLayoutStyles from "../../styles/homelay.module.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HeroBanner from "../../comp/heroBanner";
import HeroCategoryBanner from "../../comp/heroCategoryBanner/HeroCategoryBanner";
import ShopSalesMenu from "../../comp/shopSalesMenu/ShopSalesMenu";
import TopRatedProducts from "../../comp/topRated/TopRatedProducts";

const HomeLayout = ({ children, data }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <HeroBanner />
        </Grid>
        <Grid item xs={12} md={12}>
          <HeroCategoryBanner />
        </Grid>
        <Grid item xs={12} md={12}>
          <ShopSalesMenu text={"Shop New"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{ paddingLeft: "20px", marginTop: "18px" }}
            className={HomeLayoutStyles.side_banner_container}
          >
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
        <Grid item xs={12} md={12}>
          <TopRatedProducts data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;
