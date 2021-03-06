const dramas = [
  "Stanger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd"
]

const animations = [
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers"
]

const comedies = [
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse"
]

const allShows = [
  "Stanger Llamas",
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
  "Full Mouse"
]


// 1. We heard raving reviews about all the llama dramas on Petflix! Create a function that returns every show in the `dramas` array that has the word `"Llama"` in it.

const ravingLlamaMovies = (movieArray) => {
  let llamaArray = []

  movieArray.forEach((movie) => {
    if (movie.includes("Llama")){
      llamaArray.push(movie)
    }
  })

  return(llamaArray)
}
// 2. We are very picky when it comes to our funny tv shows. Write a function will return every show in our `comedies` array that does *NOT* have the word `"Cat"` in it.

// const noCatMoviesAllowed = (moviesArray) => {
//   let nonCatMoviesArray = []
//
//   moviesArray.forEach((movie) =>{
//     if (!movie.includes("Cat")){
//       nonCatMoviesArray.push(movie)
//     }
//   })
//
//   return(nonCatMoviesArray)
// }

const noCatMoviesAllowed = (moviesArray) => {

  let nonCatMoviesArray = moviesArray.filter((movie) => {
    return (!movie.includes("Cat"))
  })

  return(nonCatMoviesArray)
}

// 3. Our significant other is a significant dog person. Write a function that takes an an array of shows as an argument, and returns an array of shows from that array that contains the word "dog"

const retrieveDogShows = (arrayofShows) => {
  let dogShows = []

  arrayofShows.forEach((show) => {
    if (show.includes("Dog")) {
      dogShows.push(show)
    }
  })

  return(dogShows)
}

// 3.5. Do the same for cats!
const retrieveCatShows = (arrayofShows) => {
  let catShows = []

  arrayofShows.forEach((show) => {
    if (show.includes("Cat")) {
      catShows.push(show)
    }
  })

  return(catShows)
}

// 4. Write a function that takes in a string and an array of shows, and returns all shows from the given array that contain that substring.

const returnShowsForSelection = (searchWord, showArray) => {
  // let showsForSelection
  let showsForSelection = []

  showArray.forEach((show) => {
    if (show.includes(searchWord)) {
      showsForSelection.push(show)
    }
  })

  return(showsForSelection)
}

const petFlixOptions = [
  "Search",
  "Browse by Category"
]

const errorMessages = [
  "Whoops, something went wrong!",
  "Unable to connect to Petflix, please try again later.",
  "Only pets can view that show. YOU ARE NOT A PET!",
  "Woof woof woof, meow, bark, purr.",
  "404: Four-O-Fur Not Found"
]

// 6. [For this step, you may want to work on each browsing option individually first. Also, you should be storing this functionality in seperate functions where possible]
//Give the user a selection of browsing options shown in petFlixOptions. Begin by welcoming the user to petflix, and then display to them their options:

console.log("Welcome to Petflix")

console.log("Your options for browsing are:")

console.log(petFlixOptions.join("\n"))

// - If they choose search, then prompt for input and return any show that contains the substring of their search. If nothing is matched return a message: "No shows about that topic yet!" Use any functions you may have already created.



// - If they choose browse by category, prompt them to choose from animations, drama, comedy, cat or dog. If they choose one of the first three categories, display that list of shows and ask them to make a selection from the list.

// - If they chose cat or dog, return only those shows that contain cat or dog respectively.

// Finally, regardless of their selection, once they have made a selection, return a random message from one of the elements in the error message array :P
