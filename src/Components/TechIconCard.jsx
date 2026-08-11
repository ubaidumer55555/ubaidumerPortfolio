import React from "react";

function TechIconCard({ icon: Icon, name }) {
  return (
    <div className='tech-flip' tabIndex={0} aria-label={name}>
      <div className='tech-flip-inner'>
        <div className='tech-flip-face tech-flip-front'>
          <Icon aria-hidden='true' />
          <span className='tech-flip-label'>{name}</span>
        </div>
        <div className='tech-flip-face tech-flip-back'>
          <Icon aria-hidden='true' />
          <span className='tech-flip-label'>{name}</span>
        </div>
      </div>
    </div>
  );
}

export default TechIconCard;
