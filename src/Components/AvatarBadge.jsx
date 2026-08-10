import React, { useCallback, useRef, useState } from "react";
import avatarPhoto from "../Assets/avatar-badge.png";

// Resting pose: right-to-left tilt (right side closer)
const REST = { rotateX: 12, rotateY: -28 };

function AvatarBadge() {
  const sceneRef = useRef(null);
  const frameRef = useRef(0);
  const [transform, setTransform] = useState(REST);

  const handleMouseMove = useCallback((event) => {
    const node = sceneRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width)
    );
    const py = Math.min(
      1,
      Math.max(0, (event.clientY - rect.top) / rect.height)
    );

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      // Rest at -28; cursor can push toward white back
      const rotateY = -28 + (px - 0.5) * 220;
      const rotateX = 12 + (0.5 - py) * 34;
      setTransform({ rotateX, rotateY });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    setTransform(REST);
  }, []);

  return (
    <div
      className="avatar-badge-scene"
      ref={sceneRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <div
        className="avatar-badge"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
        aria-label="Ubaid Umer badge">
        <div className="avatar-badge-face avatar-badge-front">
          <div className="avatar-badge-holder">
            <span className="avatar-badge-clip" aria-hidden="true" />
            <div className="avatar-badge-card">
              <p className='avatar-badge-brand'>
                <strong>Ubaid Umer</strong>
              </p>
              <div className="avatar-badge-photo-wrap">
                <img
                  src={avatarPhoto}
                  alt="Ubaid Umer"
                  className="avatar-badge-photo"
                />
              </div>
            </div>
            <span className="avatar-badge-glass" aria-hidden="true" />
            <span className="avatar-badge-holo" aria-hidden="true" />
          </div>
        </div>

        <div className="avatar-badge-face avatar-badge-back">
          <div className="avatar-badge-holder">
            <span className="avatar-badge-clip" aria-hidden="true" />
            <div className="avatar-badge-card avatar-badge-card-back" />
            <span className="avatar-badge-glass" aria-hidden="true" />
            <span className="avatar-badge-holo" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarBadge;
