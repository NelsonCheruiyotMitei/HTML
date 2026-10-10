// Array containing the available movie titles
const movieTitles = [
    "The Giant Gila Monster",
    "Manos: The Hands Of Fate",
    "Time Chasers"
];

// Outer function: gets the details of a selected movie
function getMovieDetails(movieTitle) {

    // Create a movie object with the selected title
    const movie = {
        title: movieTitle
    };

    // Add details for The Giant Gila Monster
    if (movie.title === "The Giant Gila Monster") {
        movie.runtime = "108 minutes";
        movie.showtime = "04:00PM";
        movie.description =
            "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.";

    // Add details for Manos: The Hands Of Fate
    } else if (movie.title === "Manos: The Hands Of Fate") {
        movie.runtime = "118 minutes";
        movie.showtime = "06:45PM";
        movie.description =
            "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.";

    // Add details for Time Chasers
    } else if (movie.title === "Time Chasers") {
        movie.runtime = "93 minutes";
        movie.showtime = "09:30PM";
        movie.description =
            "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.";
    }

    // Inner nested function
    function getMovieMessage() {

        // Access the movie object from the outer function
        return `Movie: ${movie.title}
Runtime: ${movie.runtime}
Showtime: ${movie.showtime}
Description: ${movie.description}`;
    }

    // Call the inner function and return its result
    return getMovieMessage();
}

// Call getMovieDetails using the first movie title
const movieMessage = getMovieDetails(movieTitles[0]);

// Display the result
console.log(movieMessage);