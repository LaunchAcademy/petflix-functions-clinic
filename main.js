const dramas = [
  "Stranger Llamas",
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
  "Bob's Barkers"
]

// animations.indexOf("Pokemon") !== -1
// animations.includes("Pokemon") // false

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
  "Full Mouse"
]

// 1. We heard raving reviews about all the llama dramas on Petflix! Write code that returns every show in the `dramas` array that has the word `"Llama"` in it.

let llamaDramas = []
// go through each of my dramas from my `dramas` array
dramas.forEach((show) => {
  // if it has the word "Llama" in it, store it in my new array
  if (show.includes("Llama")) {
    // add it to llamaDramas
    llamaDramas.push(show)
  }
})

console.log("llamaDramas: ", llamaDramas)

// 2. We are very picky when it comes to our funny tv shows. Write code that will return every show in our `comedies` array that does *NOT* have the word `"Cat"` in it.

// let notCats = []
// iterate through our `comedies` array
// get a list of the comedies that DON'T have the word cat in them
// comedies.forEach(show => {
//   // if the title DOESN'T have "cat"
//   if(!show.includes("Cat")) {
//     // add it to the `notCats` array
//     notCats.push(show)
//   }
// })

// for(let i = 0; i < comedies.length; i++) {
//   if(!comedies[i].includes("Cat")) {
//     // add it to the `notCats` array
//     notCats.push(comedies[i])
//   }
// }

let notCats = comedies.filter((show) => {
  return !show.includes("Cat") || !show.includes("Dog")
})

console.log("notCats: ", notCats)

// 3. Our significant other is a significant dog person. Write code that takes an an array of shows as an argument, and returns an array of shows from that array that contains the word "dog"

const getDogShows = (showsArray) => {
  let dogShows = showsArray.filter((show) => {
    return show.toLowerCase().includes("dog")
  })
  return dogShows
}

// 3.5. Do the same for cats!

const getCatShows = (showsArray) => {
  let catShows = showsArray.filter((show) => {
    return show.toLowerCase().includes("cat")
  })
  return catShows
}

// 3.75. Move the second dog show over to the cats array, just for fun.

const petFlixOptions = ["Search", "Browse by Category"]

const errorMessages = [
  "Whoops, something went wrong!",
  "Unable to connect to Petflix, please try again later.",
  "Only pets can view that show. YOU ARE NOT A PET!",
  "Woof woof woof, meow, bark, purr.",
  "404: Four-O-Fur Not Found"
]
// 4. [For this step, you may want to work on each browsing option individually first. Also, you should be storing this functionality in seperate functions where possible]
//Give the user a selection of browsing options shown in petFlixOptions. Begin by welcoming the user to petflix, and then display to them their options with a number to choose:

const showSearch = (searchTerm, showsArray) => {
  let searchResults = showsArray.filter((show) => {
    return show.toLowerCase().includes(searchTerm)
  })
  return searchResults
}

console.log("Welcome to petflix")
console.log("Here are your options:", petFlixOptions.join(" or "))

let userBrowsingChoice = prompt("So what's it gonna be?")

if (petFlixOptions.includes(userBrowsingChoice)) {
  if (userBrowsingChoice === "Browse by Category") {
    let selection = prompt(
      "choose from animations, drama, or comedy, cat, or dog."
    )

    if (selection === "drama") {
      console.log(dramas)
      console.log("Which show do you want to see?")
    } else if (selection === "comedy") {
      console.log(comedies)
      console.log("Which show do you want to see?")
    } else if (selection === "animations") {
      console.log(animations)
      console.log("Which show do you want to see?")
    } else if (selection === "cat") {
      let catShows = getCatShows(allShows)
      console.log(catShows)
    } else if (selection === "dog") {
      let dogShows = getDogShows(allShows)
      console.log(dogShows)
    }
  } else if (userBrowsingChoice === "Search") {
    let searchTerm = prompt("What are you looking for?")
    let results = showSearch(searchTerm, allShows)

    if (results.length === 0) {
      console.log("No shows about that topic yet!")
    } else {
      console.log(results)
    }
  }
} else {
  let randomErrorIndex = Math.floor(Math.random() * errorMessages.length)
  console.log(errorMessages[randomErrorIndex])
}

// - If they choose browse by category, prompt them to choose from animations, drama, or comedy, cat, or dog. If they choose one of the first three categories, display that list of shows and ask them to make a selection from the list.

// - If they chose cat or dog, return only those shows that contain cat or dog respectively.

// FUNCTION PREVIEW
// 5. Write code that takes in a string and an array of shows, and returns all shows from the given array that contain that substring.

// 6. If they choose search, then prompt for input and return any show that contains the substring of their search. If nothing is matched return a message: "No shows about that topic yet!" Use any functions you may have already created.

// 7. Finally, regardless of their selection, once they have made a selection, return a random message from one of the elements in the error message array :P
