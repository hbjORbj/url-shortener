import React from "react";
import style from "./home.module.css";

export default function ErrorPage() {
  return (
    <div
      className={style.mainContainer}
      style={{ fontSize: "2.3em", fontWeight: "700", color: "white" }}
    >
      Provided Short URL Does Not Exist 😂
    </div>
  );
}
