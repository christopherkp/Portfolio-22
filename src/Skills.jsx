import FadeIn from "./FadeIn";
import { Navigation } from "./NavigationData";
import { handleClick } from "./Helpers";
import "./shared/css/FadeIn.css";

const Skills = () => {
  return (
    <div id="containerskills">
      <div class="header">Skills</div>
      <div class="wrappersection">
        {/* <div class="skillscontentprimary">
            <FadeIn>
              <div id="skillstextprimary">Text</div>
            </FadeIn>
          </div>
          */}

        <div class="skillscontentsecondary">
          <div id="skillscontentgrid">
            <div class="skillscontentlist">
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
            </div>
            <div class="skillscontentlist">
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
            </div>
            <div class="skillscontentlist">
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
            </div>
            <div class="skillscontentlist">
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
              <div class="skillstext">Text</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contentsecondary">
        <div class="wrapperbuttons">
          <button
            class="buttonupsecondary"
            type="button"
            href={(Navigation.url = "#landing")}
            key={(Navigation.id = 2)}
            onClick={handleClick}
          >
            <img
              src="arrowup.png"
              class="imgarrowupsecondary"
              alt="Arrow pointing up"
              href={(Navigation.url = "#landing")}
              key={(Navigation.id = 2)}
              onClick={handleClick}
            />
          </button>
          <button
            class="buttondownsecondary"
            type="button"
            href={(Navigation.url = "#contact")}
            key={(Navigation.id = 2)}
            onClick={handleClick}
          >
            <img
              src="arrowdown.png"
              class="imgarrowdownsecondary"
              alt="Arrow pointing down"
              href={(Navigation.url = "#contact")}
              key={(Navigation.id = 2)}
              onClick={handleClick}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
