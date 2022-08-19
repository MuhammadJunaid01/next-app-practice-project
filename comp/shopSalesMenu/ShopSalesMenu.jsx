import ShopSalesMenuStyles from "../../styles/shopSaleMenu.module.css";
import Button from "../button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ShopSalesMenu = ({ text }) => {
  return (
    <div className={ShopSalesMenuStyles.container}>
      <div className={ShopSalesMenuStyles.content}>
        <div style={{ marginLeft: "20px" }}>
          <h2>{text}</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={ShopSalesMenuStyles.menu}>
            <p style={{ color: "#bac34e" }}>Nut & Seed</p>
            <p>Oils</p>
            <p>Fruits</p>
            <p>Tomatoes</p>
            <p>Soup</p>
          </div>
          <div className={ShopSalesMenuStyles.btn}>
            <Button
              text={"Shop All"}
              sidebar={false}
              Icon={KeyboardDoubleArrowRightIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSalesMenu;
