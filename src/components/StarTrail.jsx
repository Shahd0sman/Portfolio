import { useEffect, useRef, useState } from "react";

const MAX_STARS = 48;

export default function StarTrail() {
  const [stars, setStars] = useState([]);
  const nextId = useRef(0);
  const lastPointer = useRef(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const addStars = (newStars) => {
      setStars((current) => [...current, ...newStars].slice(-MAX_STARS));
    };

    const handlePointerMove = (event) => {
      if (event.pointerType !== "mouse") return;

      const previous = lastPointer.current;
      lastPointer.current = { x: event.clientX, y: event.clientY };
      if (previous && Math.hypot(event.clientX - previous.x, event.clientY - previous.y) < 18) return;

      addStars([{
        id: nextId.current++,
        x: event.clientX,
        y: event.clientY,
        dx: `${Math.round(Math.random() * 36 - 18)}px`,
        dy: `${Math.round(Math.random() * -32 - 10)}px`,
        kind: "trail",
      }]);
    };

    const handlePointerDown = (event) => {
      if (event.pointerType !== "mouse") return;

      const burst = Array.from({ length: 10 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 10;
        const distance = 48 + Math.random() * 42;
        return {
          id: nextId.current++,
          x: event.clientX,
          y: event.clientY,
          dx: `${Math.cos(angle) * distance}px`,
          dy: `${Math.sin(angle) * distance}px`,
          kind: "burst",
        };
      });

      addStars(burst);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const removeStar = (id) => {
    setStars((current) => current.filter((star) => star.id !== id));
  };

  return (
    <div className="star-trail" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className={`cursor-star ${star.kind}`}
          style={{
            left: star.x,
            top: star.y,
            "--star-x": star.dx,
            "--star-y": star.dy,
          }}
          onAnimationEnd={() => removeStar(star.id)}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
