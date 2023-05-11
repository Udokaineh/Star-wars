import { useState, useEffect } from "react";
import logoimg from "../src/images/star-wars.png";

const starImages = [
  {
   date: "May 25, 1977",
   image: "https://finmavis.github.io/swapi-task/static/media/bg-card-1.0c96fd00.png"
  },
  {
   date: "May 17, 1980",
   image: "https://finmavis.github.io/swapi-task/static/media/bg-card-2.b0a7b209.png"
  },
  {
   date: "May 25, 1983",
   image: "https://finmavis.github.io/swapi-task/static/media/bg-card-3.1914d853.png"
  },
  {
   date: "May 19, 1999",
   image: "https://finmavis.github.io/swapi-task/static/media/bg-card-4.c21c4d4b.png"
  },
  {
   date: "May 16, 2002",
   image: "https://finmavis.github.io/swapi-task/static/media/bg-card-5.67d061d6.png"
  },
  {
   date: "May 19, 2005",
   image: "https://finmavis.github.io/swapi-task/static/media/bg-card-6.b4fea25d.png"
  }
]

const Container = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error(error));
  }, []);

  const Images = starImages.map(myImages => myImages.image);
  const Date = starImages.map(myImages => myImages.date)

  return (
    <div className="app-container">
      <div className="logo">
        <img src={logoimg} alt="star war logo" />
      </div>
      <div className="wrapper">
        {data && data.map((film, myImages) => (
            <div key={film.episode_id} className="box-item" style={{backgroundImage:`url(${Images[myImages]})`}} >
              <h2>{film.title}</h2>
              <p className="date">{Date[myImages]}</p>
              <div className="crawl">
                <p>{film.opening_crawl}</p>
              </div>
              <div className="line"></div>
              <p className="button">
                <a href="#button">More Info</a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Container;
