import { Countrie } from "./countries.interface";
import { mapperCountries } from "./mapper.countries";

export async function UseCaseCountries(): Promise<Countrie[]> {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = mapperCountries(await res.json());
    return (data);
  } catch (error) {
    return [];
  }
}
