import React, { useState } from "react";
import styles from "../styles/Catagories.module.css";

export default function Catagories() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
