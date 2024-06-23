import express from "express";

const app = express();

// ?to make app understand json
app.use(express.json());

let movieList = [
  {
    id: 1,
    name: "Man of Steel",
    actor: "Henry Cavil",
  },
  {
    id: 2,
    name: "Love Rosie",
    actor: "Sam Caflin",
  },
  {
    id: 3,
    name: "Harry Potter",
    actor: "Daniel Radcliff",
  },
];

// ?network port
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// ?add movie
app.post("/movie/add", (req, res) => {
  console.log(req.body);
  // const newMovie = {
  //   id: 4,
  //   name: "Harry Potter",
  //   actor: "Emma Stone",
  // };
  // movieList.push(newMovie);
  const newMovie = req.body;
  movieList.push(newMovie);
  return res.status(200).send("Added");
});

// ?get movie
app.get("/movie/list", (req, res) => {
  return res.status(200).send(movieList);
});
