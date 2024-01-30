// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

let touristDestination = ["Norway", "Sweden", "Finland"];
console.log("3 tourist destinations ", touristDestination);
touristDestination.push("Bangladesh");
console.log("Added a new tourist destination ", touristDestination);
touristDestination.push("Germany", "France");
console.log("Added two more tourist destinations ", touristDestination);
touristDestination.pop();
console.log(
  "Remove last tourist destination which have added ",
  touristDestination
);
