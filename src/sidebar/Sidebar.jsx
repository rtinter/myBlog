import "./sidebar.css"

export default function Sidebar() {

  return(
      <div className="sidebar">
        <span className="title">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="man from behind"/>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren
        </p>
          <span className="title">CATEGORIES</span>
            <ul className="categorie-list">
              <li className="listitem">Life</li>
              <li className="listitem">Tech</li>
              <li className="listitem">Health</li>
              <li className="listitem">Food</li>
              <li className="listitem">Holiday</li>
            </ul>
          <span className="title">FOLLOW ME</span>
          <div className="media-icons">
            <i className="nav-brand-icon fa-brands fa-square-facebook"></i>
            <i className="nav-brand-icon fa-brands fa-square-x-twitter"></i>
            <i className="nav-brand-icon fa-brands fa-square-instagram"></i>
            <i className="nav-brand-icon fa-brands fa-linkedin"></i>
          </div>
      </div>

  )
}