import "./header.css"

export default function Header() {

  return(
      <div className="header">
        <div className="header-titles">
          <span className={"header-small"}>welcome to my</span>
          <span className={"header-large"}>Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
             alt="beautiful picture of a sunrise"/>
      </div>
  )
}