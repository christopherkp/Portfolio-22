import { Navigation } from "./NavigationData";
import { handleClick } from "./Helpers";

const Contact = () => {
  return (
    <div id="containecontact">
      <div class="header">Contact</div>
      <div class="wrappersection"></div>
      <div class="contentsecondary">
        <div class="wrapperbuttons">
          <button
            class="buttonupprimary"
            type="button"
            href={(Navigation.url = "#skills")}
            key={(Navigation.id = 2)}
            onClick={handleClick}
          >
            <img
              src="arrowup.png"
              class="imgarrowupsecondary"
              alt="Arrow pointing up"
              href={(Navigation.url = "#skills")}
              key={(Navigation.id = 2)}
              onClick={handleClick}
            />
          </button>
          <anohover id="backtotopwrapper" href="#landing" onClick={handleClick}>
            <anohover id="backtotoptext" href="#landing" onClick={handleClick}>
              {" "}
              Back to top{" "}
            </anohover>
          </anohover>
        </div>
      </div>
    </div>
  );
};

export default Contact;
