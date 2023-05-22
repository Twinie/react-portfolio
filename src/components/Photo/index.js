import { useEffect, useRef } from "react";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";
import photo from "../../assets/images/Twinkle Chauhan.jpg";
import "./index.scss";

const Photo = () => {
  const bgRef = useRef();
  const outlinePhotoRef = useRef();
  const photoImgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlinePhotoRef.current, {
        drawSVG: 0,
        duration: 4,
      });

    gsap.fromTo(
      photoImgRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="photo-container" ref={bgRef}>
      <img src={photo} alt="photo" className="photo-img" ref={photoImgRef} />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height="380"
        width="315"
        viewBox="90 120 320 300"
      >
        <g className="svg-container" fill="none">
          <rect x="105" y="80" width="280" height="380" ref={outlinePhotoRef} />
        </g>
      </svg>
    </div>
  );
};

export default Photo;
