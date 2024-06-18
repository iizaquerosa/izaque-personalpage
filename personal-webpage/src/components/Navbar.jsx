import '../components/Navbar.css'
import NavItem from './Navitems'

function Navbar(){
    return(
        <div className="navbar">
            <NavItem item="Inicio"/>
            <NavItem item="Tecnologias"/>
            <NavItem item="Experiências"/>
            <NavItem item="Contato"/>
        </div>
    )
}

export default Navbar