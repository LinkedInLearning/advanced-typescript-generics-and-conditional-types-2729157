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

function transformData(
  data: unknown[],
  transform: (input: unknown) => unknown
) {
  return data.map(transform);
}

const airports = transformData(
  invalidAirports,
  (airport): ValidAirport => {}
);

console.table(airports);
