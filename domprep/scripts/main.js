//Lightning Exercise
// Keeping track of chores
// In your index.html file, create an empty <ul> element and give it an id of #chores-container
// In your JavaScript file, declare a new letiable called choresArray. This should be an array of chores you do regularly.
// Loop through your choresArray. 
//For each chore, create a new <li> element and 
//insert it into the #chores-container element.
// You should end up with a bulleted list of all your regular chores.

let choresArray = ["laundry","sweeping", "dishes,", "sweeping"]

for(i = 0; i < choresArray.length; i++){
    document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
}
//PRACTICE EXERCISES

// 1. Movie Poster
// Copy and paste the following code between the <body> tags of your HTML document:  COPIED TO HTML

// In your JavaScript file, copy and paste the following object:

let movieObject = {
  title: "Star Wars: A New Hope",
  genre: "Science Fiction",
  releaseDate: "May 25, 1977"
}

//Use document.querySelector() 
//to grab a reference to each element in your HTML. 
//Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

let movieTitle = document.querySelector("#title");
movieTitle.innerHTML = movieObject.title;
let movieGenre = document.querySelector("#genre");
movieGenre.innerHTML = movieObject.genre;
let movieReleaseDate = document.querySelector("#release-date");
movieReleaseDate.innerHTML = movieObject.releaseDate;


//2. Downtown Restaurants
// Copy and paste the following array into your JavaScript file:

let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];



// Copy and paste the following code into your index.html file: COPIED line 13

// Loop over the downtownRestaurants array.
for(j = 0; j < downtownRestaurants.length; j++) {
    document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[j]}</li>`
}
// Use the loop to create an <li> element for each item in the array.
//Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
//You should see a bulleted list of restaurants in the DOM.

// 3. Sandwich Toppings
// Copy and paste the following array into your JavaScript file:
let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]
// Copy and paste the following code into your index.html file: COPIED LINE 15

// Write a function that does the following things:
// Loop through sandwichToppings

function toppingsList(){
    for(t = 0; t < sandwichToppings.length; t++){
        document.querySelector("#sandwich-container").innerHTML +=
        `<li>${sandwichToppings[t]}</li>`
    }
}

toppingsList()

// Build an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

// Challenges
// 4. Movie Schedule
// You've been hired to build an app for a movie theater. You need to list all of the movies that are currently playing.

//Start with some basic HTML:


// In your JavaScript file, copy and paste the following array of objects:

let movieSchedule = [
  {
    title: "Ralph Breaks the Internet",
    rating: "PG",
    currentlyPlaying: true,
    poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
  },
  {
    title: "The Grinch",
    rating: "G",
    currentlyPlaying: true,
    poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
  },
  {
    title: "A Star is Born",
    rating: "R",
    currentlyPlaying: false,
    poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
  },
   {
    title: "Bohemian Rhapsody",
    rating: "PG-13",
    currentlyPlaying: true,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Fantastic Beasts: The Crimes of Grindlewald",
    rating: "PG-13",
    currentlyPlaying: true,
    poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
  },
  {
    title: "Robin Hood",
    rating: "PG-13",
    currentlyPlaying: false,
    poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    rating: "PG-13",
    currentlyPlaying: true,
  }
]
// Use a for loop to loop through the movies,
for(m =0; m < movieSchedule.length; m++) {
      if(movieSchedule[m].currentlyPlaying === true){
        document.querySelector("#movie-schedule").innerHTML += `<section class="movie-card"><h2>${movieSchedule[m].title}</h2><h3>RATING:${movieSchedule[m].rating}</h3><img src=${movieSchedule[m].poster}></section>`
      }
      // else {
      //   document.querySelector("#movie-schedule").innerHTML += `<h1>${movieSchedule[m].title}</h1><h2>RATING:${movieSchedule[m].rating}</h2><h2>Coming Soon!</h2><img src=${movieSchedule[m].poster}>`
    }
     
    
    
      // 5. Movie Schedule Take Two
      // Revisit your movie schedule exercise from above.
      // Add a conditional so that you only print movies where the currentlyPlaying property is equal to true.
      // Use flexbox to arrange your movie schedule side by side on your web page.
      // If a movie does not have a poster property, give it a placeholder image like this
      // Give all G-rated movies a dotted green border that's 2px wide.
      // Give all PG-rated movies a dotted yellow border that's 2px wide.
      // Give all PG-13 movies a dotted orange border that's 2px wide.
      // Give all R-rated movies a dotted red border that's 2px wide.
     

// build an HTML representation of each movie, 
//and insert it into the #movie-schedule container in the DOM.


// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.