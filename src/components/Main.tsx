import "../styles/Main.css";

import EmailTitle from "./MainEmailTitle";
import EmailHeadr from "./EmailHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";
import EmailToolBar from "./EmailToolBar";

function Main() {
  return (
    <main className="email-view">
      <EmailToolBar />
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
