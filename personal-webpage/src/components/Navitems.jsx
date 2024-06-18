import '../components/Navitems.css'

function NavItem(props) {
    return (
        <div className="navitem">
            {props.item}
        </div>
    )
}

export default NavItem