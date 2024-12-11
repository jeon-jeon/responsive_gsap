import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function App() {
  const box1 = useRef(null);
  const box2 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(box1.current, { x: 100, duration: 1 })
      .to(box2.current, { x: 100, duration: 1 });
  }, []);

  return (
    <div>
      <div
        ref={box1}
        style={{ width: "100px", height: "100px", border: "1px solid black" }}
      ></div>
      <div
        ref={box2}
        style={{ width: "100px", height: "100px", border: "1px solid red" }}
      ></div>
    </div>
  );
}

export default App;
