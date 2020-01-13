const dramas = [
  "Stanger Llamas",
  "Game of Bones",
  "llama Actually",
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


// 1. We heard raving reviews about all the llama dramas on Petflix!
//Create a function that returns every show in the `dramas` array that has the word `"Llama"` in it.

dramas.forEach(drama => {
  if (drama.toLowerCase().includes("llama")){
    console.log(drama)
  }
})

//
// 2. We are very picky when it comes to our funny tv shows.
// Write a function which will return every show in our `comedies` array that does *NOT* have the word `"Cat"` in it.
comedies.forEach(comedy => {
  if(!comedy.toLowerCase().includes("cat")){
    console.log(comedy)
  }
})


// 3. Our significant other is a significant dog person.
//Write a function that takes an an array of shows as an argument, and returns an array of shows from that array that contains the word "dog"

let dogShows = allShows.reduce((dogShows, show) => {
  if (show.toLowerCase().includes("dog")){
    dogShows.push(show)
  }
  return dogShows
}, [])


console.log(dogShows)
// 3.5. Do the same for cats!

let catFreeShows = allShows.filter(show => {return show.toLowerCase().includes("cat")})

console.log(catFreeShows)

// 4. Write a function that takes in a string and an array of shows,
// and returns all shows from the given array that contain that substring.

let showSearch = (showArray, showString) => {
    let results = showArray.reduce((results, show) => {
      if (show.toLowerCase().includes(showString.toLowerCase())) {
        results.push(show)
      }
      return results
    },[])
    return results
}

// console.log(showSearch(allShows, "dog"))

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

// 5. [For this step, you may want to work on each browsing option individually first.
//Also, you should be storing this functionality in seperate functions where possible]
//Give the user a selection of browsing options shown in petFlixOptions.
//Begin by welcoming the user to petflix, and then display to them their options:

console.log("Welcome to Petflix")
//
console.log("Your options for browsing are:")
//
console.log(petFlixOptions.join("\n"))

let searchQuery = prompt("Which option would you like?\nSearch\nBrowse").toLowerCase().trim()

if (searchQuery === "search"){
  let show = prompt("What type of show do you want to watch?").toLowerCase().trim()
  let searchResults = showSearch(allShows,show)
  if (searchResults.length > 0){
      console.log(searchResults)
  } else {
    console.log("No shows about the topic yet!")
  }
} else if (searchQuery === "browse") {
  let selection = prompt("Choose from the following options Animation, Drama, Comedy, Cat, Dog").toLowerCase().trim()
  // do{
  //   selection = prompt("Choose from the following options Animation, Drama, Comedy, Cat, Dog").toLowerCase().trim()
  // } while(selection !== "animation" && selection !== "drama" && selection !=="comedy" && selection !== "cat" && selection !== "dog")

  if(selection == "animation"){
    console.log(animations)
  } else if (selection === "drama") {
    console.log(dramas)
  } else if (selection === "comedy") {
    console.log(comedies)
  } else if (selection === "dog") {
    console.log(showSearch(allShows,"dog"))
  } else {
    console.log(errorMessages[0])
  }
}
// - If they choose search, then prompt for input and return any show that contains the substring of their search.
// If nothing is matched return a message: "No shows about that topic yet!" Use any functions you may have already created.


// - If they choose browse by category,
//prompt them to choose from animations, drama, comedy, cat or dog.
// If they choose one of the first three categories, display that list of shows and ask them to make a selection from the list.
// - If they chose cat or dog, return only those shows that contain cat or dog respectively.



// Finally, regardless of their selection, once they have made a selection,
//return a random message from one of the elements in the error message array :P
