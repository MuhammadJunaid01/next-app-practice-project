import { Grid } from "@mui/material";
import React from "react";
import ShopSalesMenu from "../shopSalesMenu/ShopSalesMenu";
import TopRatedStyles from "../../styles/topRatedProducts.module.css";
const TopRatedProducts = ({ data }) => {
  return (
    <div className={TopRatedStyles.container}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <ShopSalesMenu text={"Top Rated"} />
        </Grid>
        <Grid item xs={12} md={12}>
          {data.map((product, index) => {
            return (
              <div key={index}>
                <h2>{product.title}</h2>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default TopRatedProducts;
