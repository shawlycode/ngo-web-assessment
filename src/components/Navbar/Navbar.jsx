import { CiMenuFries } from "react-icons/ci";


const NavbarMenu =[
    {
      id:1,
      title:"Home",
      path:"/",
    },
    {
      id:2,
      title:"About Us",
      path:"/about",
    },
    {
      id:3,
      title:"Resources",
      path:"/resources",
    },
    {
      id:4,
      title:"Contact",
      path:"/contact",
    },
  ]
export default function Navbar() {
  return (
<nav className="container py-10 flex justify-between items-center">
  {/*  logo section */}
  <div>
    <h1 className="font-bold text-2xl text-lime-500">gocingo</h1>
  </div>
  {/*  menu section */}
  <div className="hidden lg:block ">
    <ul className="flex items-center gap-4 ">
       {NavbarMenu.map((menu)=>(
        <li key={menu.id}>
            <a href={menu.path} className="inline-block py-2 px-3 hover:text-primary relative group font-bold ">
                {/* creating menu hover dot */}
                <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2  top-1/2 bottom-0 group-hover:block hidden"></div>
                {menu.title}</a>
        </li>
       ))}
    </ul>
  </div>
       <div className="primary-btn hidden lg:block">Donate</div>
  {/*  mobile icon section */}
<div className="lg:hidden text-3xl"><CiMenuFries/></div>

</nav>
  )
}
 