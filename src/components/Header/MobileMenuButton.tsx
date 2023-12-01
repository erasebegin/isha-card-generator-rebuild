import "./MobileMenuButton.sass";

type Props = {
  setMobileMenuIsOpen: (mobileMenuIsOpen: boolean) => void;
  mobileMenuIsOpen: boolean;
};

const MobileMenuButton = (props: Props) => {
  return (
    <button
      className={`mobile-menu-button ${props.mobileMenuIsOpen ? "open" : ""}`}
      onClick={() => props.setMobileMenuIsOpen(!props.mobileMenuIsOpen)}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default MobileMenuButton;
