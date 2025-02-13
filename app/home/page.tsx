import CardComponent from "../ui/components/cards/card";
import { UseCaseCountries } from "../application/use-case/countries/usecase-countries";
import styles from "./home.module.css";
import FilterComponent from "../ui/components/filtet/filter";
import { Input } from "../ui/components/search/search";

export default async function HomePage() {
  const countries = await UseCaseCountries();
  console.log(countries);

  return (
    <div>
      <div className={styles.containerFiltro}>
        <Input
          name="q"
          type="search"
          placeholder="Search for a county..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
        <FilterComponent />
      </div>
      <div className={styles.containerData}>
        {countries.map((item, i) => (
          <CardComponent country={item} key={i}></CardComponent>
        ))}
      </div>
    </div>
  );
}
