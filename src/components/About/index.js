import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJira,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>

        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className="stage-cube-cont">
        <div className="face1">
          <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
        </div>

        <div className="face2">
          <FontAwesomeIcon icon={faJsSquare} color="#efd813" />
        </div>

        <div className="face3">
          <FontAwesomeIcon icon={faHtml5} color="#f06529" />
        </div>

        <div className="face4">
          <FontAwesomeIcon icon={faCss3} color="#28d4a9" />
        </div>

        <div className="face5">
          <FontAwesomeIcon icon={faGithub} color="#ec4d28" />
        </div>
      </div>
    </div>
  );
};

export default About;
