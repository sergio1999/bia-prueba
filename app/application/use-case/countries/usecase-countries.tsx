import { Countrie } from "./countries.interface";
import { mapperCountries } from "./mapper.countries";

let countriesGlobal: Countrie[] = await UseCaseCountries();

async function UseCaseCountries(): Promise<Countrie[]> {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = mapperCountries(await res.json());
    return data;
  } catch (error) {
    return [];
  }
}

async function getCoutryByName(name: string): Promise<Countrie> {
  const countries = await UseCaseCountries();
  const country = countries.filter((element) => element.name == name);
  return country[0];
}

async function getRegions(): Promise<string[]> {
  const countries = await UseCaseCountries();
  const regions = countries.map((element) => element.region);
  const filterRegion = regions.filter(
    (item, index) => regions.indexOf(item) === index
  );
  return filterRegion;
}

async function filterByRegion(region: string) {
  const countries = await UseCaseCountries();
  // console.log("countries", countries);
  if (region == "") {
    return countries;
  }
  const list = countries.filter((element) => element.region == region);
  // console.log("list", list);
  countriesGlobal.push;
  countriesGlobal = list;
  return list;
}

async function filterByName(name: string) {
  const countries = await UseCaseCountries();
  const list = countries.filter((element) => element.name.includes(name));
  countriesGlobal = list;
  return list;
}

export {
  countriesGlobal,
  UseCaseCountries,
  getCoutryByName,
  getRegions,
  filterByRegion,
  filterByName,
};
