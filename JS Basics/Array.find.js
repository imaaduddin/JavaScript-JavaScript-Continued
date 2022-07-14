// FIND 
// returns the value of the first element in the array that satisfies the provided testing function 

let movies = [
    "Spider-Man",
    "Spider-Man 2",
    "Spider-Man 3",
    "The Amazing Spider-Man",
    "The Amazing Spider-Man 2"
];

let movie = movies.find(movie => {
    return movie.includes("2");
});

let movie2 = movies.find(m => m.indexOf("2") === 2);

console.log(movie);
console.log(movie2);

const books = [{
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25
    }, 
    {
        title: "Bone: the Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42
    },
    {
        title: "American Gods",
        authors: ["Neil, Gaiman"],
        rating: 4.11
    }, 
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"],
        rating: 4.36
    }
];

const goodBook = books.find(b => b.rating >= 4.3);
const neilBook = books.find((b) => {
    return b.authors.includes("Neil Gaiman");
});
console.log(neilBook);