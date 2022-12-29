import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import {auth} from '../../firebase';

import {useStateValue} from '../../Components/StateProvider/StateProvider'
import {
  CInputGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
  CButton,
} from "@coreui/react";

function Header({ placeToDeliver }) {
  const [{ basket,user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <a className="place-link">
          <div className="deliver-wrapper">
            <div className="place-icon">
              <PlaceIcon />
            </div>
            <div>
              <span>Deliver to </span> <br />
              {(placeToDeliver = "Ethiopia")}
            </div>
          </div>
        </a>

        <div className="header__search">
          <CInputGroup className="mb-3  ">
            <CDropdown variant="input-group">
              <CButton type="button" color="secondary" variant="outline">
                All
              </CButton>
              <CDropdownToggle color="secondary" variant="outline" split />
              <CDropdownMenu>
                <CDropdownItem href="#">Shoe</CDropdownItem>
                <CDropdownItem href="#">Women Cloth</CDropdownItem>
                <CDropdownItem href="#">Man Cloth</CDropdownItem>
                <CDropdownItem href="#">Pc/Laptop</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Laptop</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CFormInput aria-label="Text input with segmented dropdown button" />
            <SearchIcon className="header__searchIcon" />
          </CInputGroup>
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"} className="header-clearlink">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header-clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" className="header-clearlink">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
