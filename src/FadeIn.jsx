import { useState, useRef, useEffect } from "react";

export default function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={`fade-in ${isVisible ? "isVisible" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
}
