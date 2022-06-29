import React, { Fragment, useEffect, useState } from "react";
import classes from "./Circle.module.css";

function Circle(props) {
  const { id, activeState } = props;
  console.log(activeState);
  const numOutput = id.map((num, index) => {
    const [activeClass, setActiveClass] = useState(activeState);

    useEffect(() => {
      setActiveClass(activeState);
    }, [activeState]);

    console.log(num);
    console.log(activeClass);
    return (
      <li
        className={`${classes.circle} ${
          activeClass + 1 >= num ? classes.circleOutline : ""
        }`}
        key={num}
      >
        {num}
      </li>
    );
  });

  return <Fragment>{numOutput}</Fragment>;
}

export default Circle;
