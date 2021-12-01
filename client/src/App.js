import { BrowserRouter as Router, Route, Switch   } from "react-router-dom";
import { useState } from "react";
import Search from "./components/Search";
import Player from "./components/Player";
import Login from "./components/Login";
import useAuthenticationHelper from "./hooks/useAuthenticationHelper";
import YourLibrary from "./components/YourLibrary";
import Songs from "./components/Songs";
import { connect, useSelector } from "react-redux";
import Main from "./components/Main";
import Category from "./components/Category";
import Results from "./components/Results";

const mapStateToProps = (state) => {
    return {
      results: state
    }
}

function App() {
    const code = new URLSearchParams(window.location.search).get("code")
    console.log("code", code)
    const { } = useAuthenticationHelper(code)
    const userLogged = JSON.parse(localStorage.getItem('userLogged'))
    console.log("userlogged", userLogged)
    return (
        userLogged !== null ? 
            // code !== null
                <Router>
                    <div className="app-container">
                        <Main accessToken={userLogged.accessToken} > </Main>
                        <Switch>
                            <Route exact path="/"><YourLibrary accessToken={userLogged.accessToken} /></Route>
                            <Route exact path="/search"><Search accessToken={userLogged.accessToken} /> </Route>
                            <Route exact path="/search/category/:categoryName"><Category accessToken={userLogged.accessToken } /> </Route>
                            <Route exact path="/search/:search"><Results accessToken={userLogged.accessToken } /> </Route>
                            <Route exact path="/yourlibrary"><YourLibrary accessToken={userLogged.accessToken } /> </Route>
                            <Route exact path="/playlist/:playlistId"><Songs accessToken={userLogged.accessToken } /></Route>
                            <Route path="*"><YourLibrary accessToken={userLogged.accessToken } /></Route>
                        </Switch>
                    </div>
                </Router>
           
        :   window.location.href = "https://accounts.spotify.com/authorize?client_id=d2a7d543ee8141ee9e85e54c63fdd6e3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
    )
}

export default connect(mapStateToProps)(App);
