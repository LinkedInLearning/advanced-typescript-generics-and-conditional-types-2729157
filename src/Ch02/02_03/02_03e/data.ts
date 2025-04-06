type InvalidAirport = {
  name: string;
  code: string;
  country: string;
};

const invalidAirports: InvalidAirport[] = [
  { name: "Heathrow", code: "lhr", country: "UK" },
  { name: "JFK", code: "jfk", country: "USA" },
  { name: "Schiphol", code: "ams", country: "Netherlands" },
  { name: "Changi", code: "sin", country: "Singapore" },
  { name: "Dubai", code: "dxb", country: "UAE" },
  { name: "Los Angeles", code: "lax", country: "USA" }
];

type ValidAirport = InvalidAirport & {
  original: InvalidAirport;
};

function transformData<InputType, OutputType>(
  data: InputType[],
  transform: (input: InputType) => OutputType
) {
  return data.map(transform);
}

const airports = transformData(
  invalidAirports,
  (airport): ValidAirport => {
    return {
      ...airport,
      code: airport.code.toUpperCase(),
      original: airport
    };
  }
);

console.table(airports);
console.log(airports[0].original.code);
