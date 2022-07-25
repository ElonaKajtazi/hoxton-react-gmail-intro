import "../styles/Main.css";

import MainLeftList from "./MainLeftList";
import MainRightComponents from "./MainRightComponents";
import EmailTitle from "./MainEmailTitle";
import EmailHeadr from "./EmailHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";

function Main() {
  return (
    <main className="email-view">
      <nav className="email-toolbar">
        <MainLeftList />
        <div className="space"></div>
        <MainRightComponents />
      </nav>
      <article className="email-content">
        <EmailTitle />
        <EmailHeadr />
        <EmailBody />
        <EmailActions />
      </article>
    </main>
  );
}
export default Main;
