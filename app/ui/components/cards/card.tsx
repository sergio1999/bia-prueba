import styles from "./card.module.css";
import Image from "next/image";
import { Countrie } from "@/app/application/use-case/countries/countries.interface";

export default function CardComponent({
  country,
  key,
}: {
  country: Countrie;
  key: number;
}) {
  return (
    <div className={styles.cardCountry}>
      <div className={styles.image}>
        <Image
          src={country.image}
          alt="screenshot desktop"
          width={900}
          height={600}
          className="block"
        />
      </div>
      <div className={styles.info}>
        <h1>{country.name}</h1>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}
