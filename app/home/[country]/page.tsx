import Image from "next/image";
import React from "react";
import styles from "./country.module.css";
import { getCoutryByName } from "@/app/application/use-case/countries/usecase-countries";
import { redirect } from "next/navigation";

export default async function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const { country } =  await params;
  const countryObj = await getCoutryByName(decodeURI(country));
  return (
    <div>
      {/* <button
        type="button"
        className={`${styles.buttonBack} button-back text-white gap-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex`}
      >
        <Image
          src="../icons/arrow-back-outline.svg"
          alt="Back Row"
          width={20}
          height={25}
          className={styles.icon}
        />
        Back
      </button> */}
      <div className={styles.cointainerCountry}>
        <div className={styles.containerImage}>
          <Image
            src={countryObj.image}
            alt={countryObj.name}
            width={900}
            height={600}
            className="block"
          />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.nameCountry}>
            <h1>{countryObj.name}</h1>
          </div>
          <div className={styles.data}>
            <div className={styles.info}>
              <p>
                <span>Native Name: </span>
                {countryObj.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {countryObj.population}
              </p>
              <p>
                <span>Region: </span>
                {countryObj.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {countryObj.subRegion}
              </p>
              <p>
                <span>Capital: </span>
                {countryObj.capital}
              </p>
            </div>
            <div className={styles.info}>
              <p>
                <span>Top Level Domain: </span>
                {countryObj.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {countryObj.currencies.toString()}
              </p>
              <p>
                <span>Languages: </span>
                {countryObj.languages.toString()}
              </p>
            </div>
          </div>
          <div className={styles.borderCountries}>
            <p>Border countries: </p>
            {countryObj.borders.map((border, i) => {
              return <div key={i}>{border}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
