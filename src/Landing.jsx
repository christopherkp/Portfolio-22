import FadeIn from "./FadeIn";
import { handleClick } from "./Helpers";
import { Navigation } from "./NavigationData";

const Landing = () => {
  return (
    <div id="landing">
      <div class="container">
        <FadeIn>
          <h1 id="headerlanding">FULL STACK DEVELOPER</h1>
        </FadeIn>
        <h1 id="headercontent">Christopher Klepp</h1>
        <div id="headersecondary">
          <button
            class="buttondownprimary"
            type="button"
            href={(Navigation.url = "#skills")}
            key={(Navigation.id = 2)}
            onClick={handleClick}
          >
            <img
              src="arrowdown.png"
              class="imgarrowdown"
              alt="Arrow pointing down"
              href={(Navigation.url = "#skills")}
              key={(Navigation.id = 2)}
              onClick={handleClick}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
