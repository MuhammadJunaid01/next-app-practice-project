import { Grid } from "@mui/material";
import layoutImage from "../../public/homeLayoutImage.jpg";
import Image from "next/image";
const HomeLayout = ({ children }) => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Image
            src={layoutImage}
            width={500}
            height={900}
            layout="intrinsic"
          ></Image>
        </Grid>
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLayout;
