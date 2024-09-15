import "./navbar.css"

export default function Navbar() {

  return(
      <div className={"navbar"}>
        <div className={"navbar-left"}>
          <i className="nav-brand-icon fa-brands fa-square-facebook"></i>
          <i className="nav-brand-icon fa-brands fa-square-x-twitter"></i>
          <i className="nav-brand-icon fa-brands fa-square-instagram"></i>
          <i className="nav-brand-icon fa-brands fa-linkedin"></i>
        </div>
        <div className={"navbar-center"}>
          <ul className={"navbar-lists"}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>WRITE</li>
            <li>LOGOUT</li>
          </ul>
        </div>
        <div className={"navbar-right"}>
          <img src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-picture of a laughing man"/>
          <i className="nav-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
  )
}