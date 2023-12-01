import "./MobileMenu.sass";

type Props = {
  mobileMenuIsOpen: boolean;
};

const MobileMenu = (props: Props) => {
  return (
    <>
      <nav className={`mobile-menu ${props.mobileMenuIsOpen ? "open" : ""}`}>
        <a href="/">
          <span role="img" aria-label="link 1"></span>
          Link 1
        </a>
        <a href="/">
          <span role="img" aria-label="link 2"></span>
          Link 2
        </a>
        <a href="/">
          <span role="img" aria-label="link 3"></span>
          Link 3
        </a>
      </nav>
    </>
  );
};

export default MobileMenu;
