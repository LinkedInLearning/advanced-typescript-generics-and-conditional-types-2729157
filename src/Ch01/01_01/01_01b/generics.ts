type Country<NameType, CapitalType> = {
  name: NameType;
  capital: CapitalType;
};

type Capital = {
  name: string;
};

const country: Country<string, Capital> = {
  name: "France",
  capital: {
    name: "Paris"
  }
};

console.log(country.name);
console.log(country.capital.name);
