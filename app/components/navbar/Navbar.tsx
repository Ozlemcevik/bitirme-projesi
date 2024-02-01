
import CardCount from "./CardCount"
import Menu from "./Menu"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"
import { getCurrentUser } from "@/app/actions/getCurrentUser"


const Navbar = async () => {
    const currentUser = await getCurrentUser();
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-orange-600 text-slate-100">
        <Logo/>
        <Search/>
        <CardCount/>
        <User currentUser={currentUser}/>
        <Menu/>
    </div>
  )
}

export default Navbar