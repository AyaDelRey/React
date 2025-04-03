import "./Navbar.css"
import {Link} from "react-router-dom";


function Navbar() {

    const list = [
        {
            title: "Home",
            link: "/",
        }
    ]

    const listItems = list.map(  (item, index) => {
        return (
            <li key={index}>
                <Link to={item.link}>{item.title}</Link>
            </li>
        )
    })
    return (
        <nav className={"navbar"}>
            <ul>
                {listItems}
            </ul>
        </nav>
    )
}

export  default Navbar