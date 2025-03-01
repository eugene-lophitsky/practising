import { useRouteError } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../pages/page-not-found.css";

export default function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      
    </div>
  );
}