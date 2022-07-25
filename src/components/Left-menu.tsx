import "../styles/left-menu.css";
import LeftMenuLabel from "./LeftMenuLabel";

function LeftMenu() {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li className="item active">
          <span className="label">Inbox</span>
          <span className="count">3</span>
        </li>
        <li className="item">
          <span className="label">Starred</span>
          <span className="count">2</span>
        </li>

        <LeftMenuLabel />
      </ul>
    </nav>
  );
}
export default LeftMenu;
