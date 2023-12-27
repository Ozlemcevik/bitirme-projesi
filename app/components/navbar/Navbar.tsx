import CardCount from "./CardCount"
import Menu from "./Menu"
import Search from "./Search"
import User from "./User"
import Logo from "./Logo"

const Navbar = () => {
    return(
    
    <div className="flex items-center justify-between gap-5 md:gap-10 h-16 bg-orange-600 text-slate-100">  
        <Logo/>
        <Search/>
        <CardCount/>
        <User/>
        <Menu/>


    </div>
    )
}

export default Navbar