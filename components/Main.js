import React, { Fragment, useState } from "react";
import Circle from "./Circle";
import classes from "./Main.module.css";

function Main() {
  const [active, setActive] = useState(0);
  const id = [1, 2, 3, 4, 5];
  let classWidth = active * 17.4;

  const onAddClickHandler = () => {
    if (active <= 4) setActive(active + 1);
    if (active >= 4) setActive(active);
  };

  const onMinusClickHandler = () => {
    if (active <= 4) setActive(active - 1);
    if (active === 0) setActive(active);
  };
  console.log(active);
  return (
    <div className={classes.section}>
      <div className={classes.main}>
        <ul className={classes.container}>
          <Circle id={id} activeState={active}></Circle>
        </ul>

        <div
          className={`${classes.line} `}
          style={{ width: classWidth + "rem" }}
        ></div>

        <div
          className={classes.lineFix}
        ></div>
      </div>
      <div className={classes.controller}>
        <button className={classes.button} onClick={onMinusClickHandler}>
          previous
        </button>
        <button className={classes.button} onClick={onAddClickHandler}>
          next
        </button>
      </div>
    </div>
  );
}

export default Main;
