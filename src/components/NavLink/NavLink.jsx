import {Navlink as ReactRouterNavLink} from "react-router-dom"

export default function Navlink (props){
    const { to, label } = props;

    return(
        <ReactRouterNavLink
            to={to}
            className={({isActive}) => (isActive ? "active-page" : "")}
        >
            {label}
        </ReactRouterNavLink>
    );
}