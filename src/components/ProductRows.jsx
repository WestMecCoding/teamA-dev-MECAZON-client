import { useState, useEffect } from "react";
import styles from "../styles/ProductRows.module.css";
import itemsRow from "./itemsRow";

import axios from "axios";

// const [groceries, setGroceries] = useState([]);
useEffect(() => {
  async function fetchGroceries() {
    try {
      const response = await axios.get("/dummy-data/groceries.json");

      // set the state of the groceries to the response.data
      setGroceries(response.data);
    } catch (err) {
      console.error("something went wrong fetching groceries", err);
    }
  }
  fetchGroceries();
}, []);

useEffect(() => {
  sessionStorage.setItem("groceries", JSON.stringify(groceries));
  console.log(JSON.parse(sessionStorage.getItem("groceries")));
}, [groceries]);

export default function EmployeeLogIn() {
  return (
    <>
      <div className={styles.rows}>
        <itemsRow></itemsRow>
      </div>
    </>
  );
}
