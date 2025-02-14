"use client";
import { ChangeEvent, useState } from "react";
import styles from "./filter.module.css";
import { filterByRegion } from "@/app/application/use-case/countries/usecase-countries";

export default function FilterComponent({ regions }: { regions: string[] }) {
  const [valueFilter, setValueFitler] = useState("");
  const changeValue = async (e: ChangeEvent<HTMLSelectElement>) => {
    setValueFitler(e.target.value);
    filterByRegion(e.target.value);
  };
  return (
    <select
      id="countries"
      className={`${styles.filterSelect} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
      aria-placeholder="Filter by Region"
      onChange={changeValue}
      value={valueFilter}
    >
      <option value="">Filter by Region</option>
      {regions.map((item, i) => {
        return (
          <option key={i} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}
