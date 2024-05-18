import Landing from "./Landing";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="home">
      <div id="rowhome">
        <div class="sectionabout" id="about">
          <Landing />
        </div>
        <div class="sectionskills" id="skills">
          <Skills />
        </div>
        <div class="sectioncontact" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
