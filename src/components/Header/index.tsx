import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import NavMenu from "./NavMenu";
import "./Header.sass"

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <header>
        <img src="/img/save-soil-logo.webp" />
      <MobileMenuButton
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />
      <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen} />
      <NavMenu />
    </header>
  );
};

export default Header;
