const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let movies = [
  { id: 1, title: "Os Condenados de Shawshank", releaseDate: "1994" },
  { id: 2, title: "O Padrinho", releaseDate: "1972" },
  { id: 3, title: "O Cavaleiro das Trevas", releaseDate: "2008" },
  { id: 4, title: "O Padrinho: Parte II", releaseDate: "1974" },
  { id: 5, title: "Doze Homens em Fúria", releaseDate: "1957" },
];

app.get("/movies", (req, res) => {
  const { search } = req.query;

  if (search) {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(movies);
});

app.listen(port, () => {
  console.log(`Fake server listening at http://localhost:${port}`);
});
