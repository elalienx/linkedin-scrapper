// Project files

import scrapper from "./scripts/scrapLinkedIn.js";
import data from "./data/linkedIn.js";

// import scrapper from "./scripts/scrapBootcamp.js";
// import data from "./data/bootcamp.js";

// Properties
const result = [];

for (const url of data) {
  const profile = await scrapper(url);

  result.push(profile);
}

console.table(result);
