import { useParams } from "react-router-dom";

export default function ShowDetails({ movie, setMovie }) {
  let { id } = useParams();
  console.log(movie);

  return (
    <div>
      <p>{movie}</p>
    </div>
  );
}
