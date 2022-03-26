let movie = {
    title: "a",
    year: 2019,
    rating: 4.5,
    director: "b",
};

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "string") console.log(key, obj[key]);
    }
}

showProperties(movie)
// only log 'string' key of the object movie
