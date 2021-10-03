import React from "react";
import classes from "./Today.module.css";

const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString("default", { month: "long" });
const day = date.getDay();

const Today = () => {
  return (
    <div className={classes.component}>
      <h3>{month}</h3>
      <h2>{day}</h2>
      <h3>{year}</h3>
    </div>
  );
};

export default Today;
