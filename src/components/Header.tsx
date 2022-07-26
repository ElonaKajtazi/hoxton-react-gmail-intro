import "../styles/header.css";
import HeaderLeftMenu from "./HeaderLeftMenu";
import HeaderSearchBar from "./HeaderSearchBar";
function Header() {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <HeaderSearchBar />
    </header>
  );
}
export default Header;
