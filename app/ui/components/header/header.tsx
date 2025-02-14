"use client";
import { MouseEvent, useState } from "react";
import styles from "./header.module.css";

export default function HeaderComponent() {
  const [valueTheme, setValueTheme] = useState("Dark Mode");

  const changeTheme = (e: MouseEvent<HTMLButtonElement>) => {
    if (valueTheme == "Dark Mode") {
      document.documentElement.style.setProperty("--dark-blue", "#ffffff");
      document.documentElement.style.setProperty(
        "--very--dark--blue",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--very--dark--blue-text",
        "#ffffff"
      );
      document.documentElement.style.setProperty("--dark--gray", "#ffffff");
      document.documentElement.style.setProperty(
        "--very--light--gray",
        "#ffffff"
      );
      document.documentElement.style.setProperty("--color-font", "#000000");
      document.documentElement.style.setProperty("--box-shadow-header", "0 0 5px 0px #1d2a33");
      document.documentElement.style.setProperty("--box-shadow-card", "0px 0px 8px #00000045");
      setValueTheme('Light Mode');
    } else {
      document.documentElement.style.setProperty("--dark-blue", "#2b3945");
      document.documentElement.style.setProperty(
        "--very--dark--blue",
        "#202c37"
      );
      document.documentElement.style.setProperty(
        "--very--dark--blue-text",
        "#111517"
      );
      document.documentElement.style.setProperty("--dark--gray", "#858585");
      document.documentElement.style.setProperty(
        "--very--light--gray",
        "#fafafa"
      );
      document.documentElement.style.setProperty("--color-font", "#ffffff");
      document.documentElement.style.setProperty("--box-shadow-header", "0 0 5px 5px #1d2a33");
      document.documentElement.style.setProperty("--box-shadow-card", "0 0 5px 5px #1d2a33");
      setValueTheme('Dark Mode');
    }
  };
  return (
    <header className={styles.customHeader}>
      <div className={styles.title}>
        <h1>Where in the world?</h1>
      </div>
      <div className={styles.mode}>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={changeTheme}
        >
          {valueTheme}
        </button>
      </div>
    </header>
  );
}
