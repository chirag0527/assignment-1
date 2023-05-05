import Show from "./Show.js";
import { useState, useEffect } from "react";
import striptags from "striptags";

export default function ShowContainer({ movie, setMovie }) {
  const [dataArray, setDataArray] = useState([]);
  console.log(movie);

  const url = "https://api.tvmaze.com/search/shows?q=all";

  async function getData() {
    const response = await fetch(url);
    const json = await response.json();
    setDataArray(json);
  }

  useEffect(() => {
    getData();
  }, []);

  const testArray = dataArray.map((show, index) => {
    if (!show.show.image) return null;
    return (
      <Show
        id={show.show.id} // add the id prop
        img={`${show.show.image.medium}`}
        name={show.show.name}
        summary={show.show.summary.replace(/<\/?p>/gi, "")}
        setMovie={setMovie}
      />
    );
  });

  if (dataArray.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="show-container">{testArray}</div>
      </>
    );
  }
}
