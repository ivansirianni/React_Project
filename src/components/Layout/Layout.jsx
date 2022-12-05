import NavBar from "../Layout/components/NavBar";
import { PAGES } from "../Utilities/main_pages"
import "./Layout.css"

export default function Layout(props){
    const { children } = props;


    return (
        <div className="layout-container">
            <NavBar pages={PAGES} />
            {children}
        </div>
    );
}