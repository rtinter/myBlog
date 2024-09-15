import "./home.css"
import Header from "../../header/Header.jsx";
import Post from "../../post/Post.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";

export default function Home() {

  return(
      <div className="home">
        <>
        <Header />
          <div className="homepage">
            <Post />
            <Sidebar />
          </div>
        </>
      </div>
  );
}