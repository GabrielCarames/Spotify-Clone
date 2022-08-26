import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import useAuthenticationHelper from "./hooks/useAuthenticationHelper";
import YourLibrary from "./components/YourLibrary";
import Category from "./components/Category";
import Results from "./components/Results";
import Search from "./components/Search";
import Songs from "./components/Songs";
import Main from "./components/Main";

const mapStateToProps = (state) => {
  return { results: state }
}

function App() {
  const code = new URLSearchParams(window.location.search).get("code")
  const userLogged = JSON.parse(localStorage.getItem('userLogged'))
  useAuthenticationHelper(code)

  return (
    userLogged !== null ?
      <Router>
        <div className="app-container">
          <Main accessToken={userLogged.accessToken} > </Main>
          <Switch>
            <Route exact path="/"><YourLibrary /></Route>
            <Route exact path="/search"><Search /></Route>
            <Route exact path="/search/category/:categoryName"><Category /></Route>
            <Route exact path="/search/:search"><Results /></Route>
            <Route exact path="/yourlibrary"><YourLibrary /></Route>
            <Route exact path="/playlist/:playlistId"><Songs /></Route>
            <Route path="*"><YourLibrary /></Route>
          </Switch>
        </div>
      </Router>
      : window.location.href = "https://accounts.spotify.com/authorize?client_id=d2a7d543ee8141ee9e85e54c63fdd6e3&response_type=code&redirect_uri=https://spotify-clone-gabriel-carames.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
  )
}

export default connect(mapStateToProps)(App);
