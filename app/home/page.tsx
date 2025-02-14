import CardComponent from "../ui/components/cards/card";
import {
  countriesGlobal,
  getRegions,
} from "../application/use-case/countries/usecase-countries";
import styles from "./home.module.css";
import FilterComponent from "../ui/components/filtet/filter";
import React from "react";
import SearchComponent from "../ui/components/search/search";

export default async function HomePage() {
  const list = countriesGlobal;
  const regions = await getRegions();

  return (
    <div>
      <div className={styles.containerFiltro}>
        <SearchComponent />
        <FilterComponent regions={regions} />
      </div>
      <div className={styles.containerData}>
        {list.map((item, i) => (
          <React.Fragment key={i}>
            <CardComponent country={item}></CardComponent>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
