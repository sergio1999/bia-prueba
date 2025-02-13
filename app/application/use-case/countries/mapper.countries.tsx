import { Countrie } from "./countries.interface";

export function mapperCountries(countries: any[]): Countrie[] {
  const listCountries: Countrie[] = countries.map((element) => {
    if (!element.capital) {
      element.capital = [""];
    }
    if (!element.tld) {
      element.tld = [""];
    }
    const countrie: Countrie = {
      name: element.name?.common,
      nativeName: element.name?.nativeName?.official,
      population: element.population,
      region: element.region,
      subRegion: element.subregion,
      capital: element.capital[0],
      borders: element.borders,
      tld: element.tld[0],
      currencies: getCurrencies(element),
      languages: GetLanguages(element),
      image: element.flags.svg,
    };
    return countrie;
  });
  //   countries.forEach((element, index) => {
  //     const countrie: Countrie = {
  //       name: element.name?.common,
  //       nativeName: element.name?.nativeName?.official,
  //       population: element.population,
  //       region: element.region,
  //       subRegion: element.subregion,
  //       capital: element.capital[0],
  //       borders: element.borders,
  //       tld: element.tld[0],
  //       currencies: getCurrencies(element),
  //       languages: GetLanguages(element),
  //     };
  //     listCountries.push(countrie);
  //     if (index == 66) {
  //       return;
  //     }
  //   });
  listCountries.sort((a, b) => a.name.localeCompare(b.name));
  return listCountries;
}

function GetLanguages(countrie: any): string[] {
  const list: string[] = [];
  if (!countrie.languages) {
    return [""];
  }
  const languagesKey: string[] = Object.keys(countrie.languages);
  languagesKey.forEach((lang) => {
    list.push(countrie.languages[lang]);
  });
  return list;
}

function getCurrencies(countrie: any): string[] {
  const list: string[] = [];
  if (!countrie.currencies) {
    return [""];
  }
  const currenciesKey: string[] = Object.keys(countrie.currencies);
  currenciesKey.forEach((currencie) => {
    list.push(countrie.currencies[currencie].name);
  });
  return list;
}
