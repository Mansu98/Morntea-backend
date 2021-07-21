import About from "./Components/aboutus";
import Contact from "./Components/contactus";
import News from "./Components/News/news";
import Home from "./Components/Home";
import Writeforus from "./Components/writeforus";
import Register from "./Components/Signin-up/Register";
import Login from "./Components/Signin-up/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





import Sidebar from "./Dashboard/components/sidebar/Sidebar";
import UserList from "./Dashboard/pages/userList/UserList";
import Topbar from "./Dashboard/components/topbar/Topbar";
import Dashboard from "./Dashboard/pages/home/Home";
import Posts from "./Dashboard/pages/Posts/Posts";
import Post from "./Dashboard/pages/Post/Post";
import CreatePost from "./Dashboard/pages/CreatePost/CreatePost";
import EditPost from "./Dashboard/pages/Post/EditPost";
import EditProfile from "./Dashboard/pages/userList/EditProfile";


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/news">
            <News />
          </Route> 
          <Route exact path="/contact">
            <Contact />
          </Route> 
          <Route exact path="/writeforus">
            <Writeforus />
          </Route> 
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>  



          <Route exact path="/dashboard">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
        <Dashboard />
          </div>
    </Route>


    <Route exact path="/dashboard/users">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
         <UserList />
          </div>
    </Route>



          <Route exact path="/dashboard/editpost/:id">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
            <EditPost />
            </div>
          </Route>

          <Route exact path="/dashboard/posts">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
            <Posts />
            </div>
          </Route>

          <Route exact path="/dashboard/post/:id">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
            <Post />
            </div>
          </Route>

          <Route exact path="/dashboard/createpost">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
       <CreatePost />
       </div>
       </Route>

       <Route exact path="/dashboard/editprofile">
          <Topbar />
          <div className="container" style={{ display: "flex",
    marginTop: "10px"}}>
        <Sidebar />
    <EditProfile/>
          </div>
    </Route>


        </Switch> 
    </Router>
    
    </>
    
  );
}

export default App;
