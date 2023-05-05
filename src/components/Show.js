import { Link } from "react-router-dom";

export default function Show({ img, name, id, summary, setMovie }) {
  console.log(id);

  return (
    <>
      <div className="show">
        <Link to={`/show/${id}`} onClick={() => setMovie(summary)}>
          <img src={img} alt={name} />
          <h2>{name}</h2>
        </Link>
      </div>
    </>
  );
}
