import { useEffect, useRef, useState } from "react";

const BackTop = () => {
  const [scroll, setScroll] = useState(0);
  const [offset, Setoffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (offset > Number(400)) {
      ref.current.classList.add("block");
      ref.current.classList.remove("hidden");
      Setoffset(window.scrollY)
      console.log("if")
    } else if (offset < Number(100)) {
      ref.current.classList.add("hidden");
      ref.current.classList.remove("block");
      Setoffset(window.scrollY)
      console.log("else")
    }
  }, [offset]);

  const PageOffset = () => {
    Setoffset(window.scrollY)
    setScroll(window.scrollY);
  };
  return (
    <div
      className="fixed hidden bottom-0 right-0 bg-yellow-400"
      ref={ref}
      onScroll={PageOffset}
    >
      <a href="#">Back to Top</a>
    </div>
  );
};

export default BackTop;
