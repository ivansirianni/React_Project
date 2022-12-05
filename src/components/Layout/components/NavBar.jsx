import { NavLink} from "react-router-dom";
import CartWidget from "../../CartWidget/CartWidget";
import "NavBar.css"

export default function NavBar (props) {
    const {pages} = props;

    return (
        <nav className="nav-container">
            <ul className="list-items">
                {pages.map((page =>(
                    <li key={`${page.id}-page`}>
                        <NavLink
                            to={page.id} classname={({isActive}) =>
                            isActive ? "link is-active" : "link"
                            }
                        >
                            {page.name}
                        </NavLink>
                    </li>
                )))}
            </ul>
            <CartWidget />
        </nav>
    )
}