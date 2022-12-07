import { Link, Outlet } from "react-router-dom";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="about-me__container" area="content">
      <div className="title">Categories</div>
      <div className="links">
        <Link to="Agroecological Fruit Packs">Agroecological Fruit Packs</Link>
        <Link to="Agroecological Vegetable Packs">Agroecological Vegetable Packs</Link>
      </div>
      <Outlet />
    </div>
  );
}
