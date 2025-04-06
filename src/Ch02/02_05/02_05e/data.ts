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

function filterByCountry<T extends { country: string }>(
  items: T[],
  country: string
): T[] {
  return items.filter((item) => item.country === country);
}

const singaporeValidAirports = filterByCountry(
  airports,
  "Singapore"
);
console.log(singaporeValidAirports);

function searchAirports<
  T extends InvalidAirport | ValidAirport
>(airports: T[], query: string): T[] {
  const lowercaseQuery = query.toLowerCase();
  return airports.filter(
    (airport) =>
      airport.name.toLowerCase().includes(lowercaseQuery) ||
      airport.code.toLowerCase().includes(lowercaseQuery) ||
      airport.country.toLowerCase().includes(lowercaseQuery)
  );
}

const searchResults = searchAirports(airports, "Heat");
console.log("Search results for 'Heat'");
console.table(searchResults);

type AirportNotification =
  | {
      type: "departure";
      airport: ValidAirport;
      gate: string;
      time: string;
    }
  | {
      type: "arrival";
      airport: ValidAirport;
      terminal: string;
      time: string;
    }
  | {
      type: "delay";
      airport: ValidAirport;
      newTime: string;
      reason: string;
    }
  | {
      type: "cancellation";
      airport: ValidAirport;
      reason: string;
    };

const notifications: AirportNotification[] = [
  {
    type: "departure",
    airport: airports[0],
    gate: "G42",
    time: "14:30"
  },
  {
    type: "arrival",
    airport: airports[1],
    terminal: "T5",
    time: "14:30"
  },
  {
    type: "delay",
    airport: airports[2],
    newTime: "23:45",
    reason: "weather"
  }
];

const firstNotification = notifications[0];

if (firstNotification.type === "departure") {
  console.log(firstNotification.gate);
}
