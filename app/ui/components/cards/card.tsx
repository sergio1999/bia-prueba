"use client";
import styles from "./card.module.css";
import Image from "next/image";
import { Countrie } from "@/app/application/use-case/countries/countries.interface";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function CardComponent({ country }: { country: Countrie }) {
  const router = useRouter();
  const clickCard = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    router.push(`/home/${decodeURI(country.name)}`);
  };
  return (
    <div className={styles.cardCountry} onClick={clickCard}>
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
