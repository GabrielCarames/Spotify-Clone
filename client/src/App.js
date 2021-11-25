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
           
        :   <Login />
    )
}

export default connect(mapStateToProps)(App);
