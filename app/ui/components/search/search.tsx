"use client";
import { ChangeEvent } from "react";
import styles from "./search.module.css";
import { filterByName } from "@/app/application/use-case/countries/usecase-countries";

export default function SearchComponent({}: {}) {
  const changeValueFitler = async (e: ChangeEvent<HTMLInputElement>) => {
    filterByName(e.target.value);
  };
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className={`${styles.searchInput} block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg`}
          placeholder="Search for a country..."
          onChange={(e) => changeValueFitler(e)}
          required
        />
      </div>
    </div>
  );
}
