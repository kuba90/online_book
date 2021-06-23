import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function Card() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: "150px", height: "250px" }} /// these are optional style, it is not necessary
    >
      <FrontSide style={{ backgroundColor: "#41669d" }}>ROCKS</FrontSide>
      <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
    </Flippy>
  );
}
