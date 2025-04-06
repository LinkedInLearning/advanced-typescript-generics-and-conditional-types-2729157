"use strict";
const invalidAirports = [
    { name: "Heathrow", code: "lhr", country: "UK" },
    { name: "JFK", code: "jfk", country: "USA" },
    { name: "Schiphol", code: "ams", country: "Netherlands" },
    { name: "Changi", code: "sin", country: "Singapore" },
    { name: "Dubai", code: "dxb", country: "UAE" },
    { name: "Los Angeles", code: "lax", country: "USA" }
];
function transformData(data, transform) {
    return data.map(transform);
}
const airports = transformData(invalidAirports, (airport) => {
    return Object.assign(Object.assign({}, airport), { code: airport.code.toUpperCase(), original: airport });
});
invalidAirports.push({
    name: "Redmond",
    code: "rdm",
    country: "US"
});
console.table(airports);
console.log(airports[0].original.code);
