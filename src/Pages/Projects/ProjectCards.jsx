import React from "react";
import { ImPointRight } from "react-icons/im";

function ProjectCards({ imgPath, title, tagline, points = [] }) {
  const bullets = points.slice(0, 3);

  return (
    <div className='project-flip' tabIndex={0} aria-label={title}>
      <div className='project-flip-inner'>
        <div className='project-flip-face project-flip-front'>
          <div className='project-flip-image-wrap'>
            <img src={imgPath} alt={title} className='project-flip-image' />
          </div>
          <div className='project-flip-front-meta'>
            <h3 className='project-flip-title'>{title}</h3>
            {tagline ? <p className='project-flip-tagline'>{tagline}</p> : null}
          </div>
        </div>

        <div className='project-flip-face project-flip-back'>
          <h3 className='project-flip-title'>{title}</h3>
          <ul className='project-flip-points'>
            {bullets.map((point) => (
              <li key={point}>
                <ImPointRight /> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
