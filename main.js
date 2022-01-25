const dramas = [
  "Stranger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd",
]

const animations = [
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers",
]

const comedies = [
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse",
]

const allShows = [
  "Stranger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Llamanitor",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd",
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers",
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse",
]

// 7. Our significant other is a significant dog person.
// Create a new array that includes every show that contains the word "dog".

// const dogShows = []
// allShows.forEach((show) => {
//   if (show.includes("Dog") || allShows.includes("dog")) {
//     dogShows.push(show)
//   }
// })

// console.log("Dog Shows: ", dogShows)

// 8. Refactor the above by writing a function that takes an an array of shows as an argument, and returns an array of shows from that array that contains the word "dog"

const getDogShows = (shows) => {
  const dogShows = []
  shows.forEach((show) => {
    if (show.includes("Dog") || show.includes("dog")) {
      dogShows.push(show)
    }
  })
  return dogShows
}
console.log("Dog Shows From Function: ", getDogShows(allShows))

// 8.5. Create the same type of function for cats!

const getCatShows = (shows) => {
  const catShows = []
  shows.forEach((show) => {
    if (show.includes("Cat") || show.includes("cat")) {
      catShows.push(show)
    }
  })
  return catShows
}

console.log("Cat Shows From Function: ", getCatShows(allShows))

// 9. Write a function that takes in a string and an array of shows, and returns all shows from the given array that contain that substring.

const getShows = (searchTerm, shows) => {
  const foundShows = []
  shows.forEach((show) => {
    if (show.toLowerCase().includes(searchTerm.toLowerCase())) {
      foundShows.push(show)
    }
  })
  return foundShows
}

const searchTerm = "LLama"
const foundShows = getShows(searchTerm, allShows)
const result = `${searchTerm} Shows From Function: ${foundShows.join(": ")}`
console.log(result)
