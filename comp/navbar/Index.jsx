import Logo from "../../public/shopLogo.png";
import Image from "next/image";
import NavbarStyle from "../../styles/navbar.module.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
const NavBar = () => {
  return (
    <div className={NavbarStyle.container}>
      <Image src={Logo} width={100} height={60} priority></Image>
      <div>
        <input className={NavbarStyle.input} type="text" />
        <button className={NavbarStyle.btn}>Search</button>
        <p>
          <SearchIcon />
        </p>
      </div>
      <div className={NavbarStyle.call_us}>
        <div className={NavbarStyle.call_us_icon}>
          <p>
            <SupportAgentIcon style={{ fontSize: "37px" }} />
          </p>
        </div>
        <div>
          <p
            style={{
              marginLeft: "4px",
              fontSize: "12px",
              lineHeight: "22px",
              fontFamily:
                "'mazzard soft h', helveticaneue-light, 'helvetica neue light', 'helvetica neue', Helvetica, Arial, 'lucida grande', sans-serif",
              fontWeight: "700",
              color: "#000000",
            }}
          >
            CALL US 24 / 7
          </p>
          <p>(+880)1634900664</p>
        </div>
      </div>
      <div className={NavbarStyle.cart_compare_person}>
        <p style={{ backgroundColor: "#B0E0E6" }} className={NavbarStyle.icon}>
          <PersonIcon style={{}} />
        </p>
        <p style={{ backgroundColor: "#FAEBD7	" }} className={NavbarStyle.icon}>
          <FavoriteIcon style={{}} />
        </p>
        <p style={{ backgroundColor: "#FFE4E1		" }} className={NavbarStyle.icon}>
          <ShoppingBasketIcon style={{}} />
        </p>
      </div>
    </div>
  );
};

export default NavBar;
