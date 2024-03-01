import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <nav className="navigation-menu">
        <Link to="/add">Go to Add Page</Link>
        <Link to="/list">Go to List Page</Link>
      </nav>
    </div>
  );
}
