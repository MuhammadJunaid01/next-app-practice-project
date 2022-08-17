import MenuBarStyles from "../../styles/menubar.module.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { departmentMenu } from "../../data";
import { useState } from "react";
const TopBar = () => {
  const [subMenu, setSubMenu] = useState([]);
  const handleSubMenu = (menu) => {
    console.log("menu", menu);
    setSubMenu(menu);
  };
  return (
    <div>
      <div className={MenuBarStyles.container}>
        <div className={MenuBarStyles.department_container}>
          <div className={MenuBarStyles.department}>
            <span style={{ marginTop: "5px", marginLeft: "10px" }}>
              <DehazeIcon style={{ fontSize: "14px" }} />
            </span>
            <p>Shop by Department</p>
            <div className={MenuBarStyles.department_menu}>
              <div>
                <p>Fruits & Vegetables</p>
                <hr />
              </div>
              <div className={MenuBarStyles.sub_menu_container}>
                <p>Supplyment</p>
                <hr />

                <div className={MenuBarStyles.sub_menu}>
                  <p>Vegetables</p>
                  <p>Fresh Meat</p>
                  <p>Fruit & Nut Gift</p>
                  <p>Fresh Berries</p>
                </div>
              </div>
              <div className={MenuBarStyles.sub_menu_container}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Dairy Breed & Eggs</p>
                  <KeyboardDoubleArrowRightIcon />
                </div>

                <div className={MenuBarStyles.sub_menu}>
                  <p>Vegetables</p>
                  <p>Fresh Meat</p>
                  <p>Fruit & Nut Gift</p>
                  <p>Fresh Berries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
