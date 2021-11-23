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

const mapStateToProps = (state) => {
    return {
      results: state
    }
}

function App() {
    const code = new URLSearchParams(window.location.search).get("code")
    const { accessToken } = useAuthenticationHelper(code)
    const userLogged = JSON.parse(localStorage.getItem('userLogged'))
    console.log("userlogged", userLogged, "code", code, "accesToken", accessToken)
    return (
        userLogged !== null || code !== null ? 
            <Router>
                <div className="app-container">
                    <Main accessToken={userLogged ? userLogged.accessToken : accessToken} > </Main>
                    <Switch>
                        <Route exact path="/"><YourLibrary accessToken={userLogged ? userLogged.accessToken : accessToken} /></Route>
                        <Route exact path="/search"><Search accessToken={userLogged ? userLogged.accessToken : accessToken} /> </Route>
                        <Route exact path="/search/category/:categoryName"><Category accessToken={userLogged ? userLogged.accessToken : accessToken} /> </Route>
                        <Route exact path="/yourlibrary"><YourLibrary accessToken={userLogged ? userLogged.accessToken : accessToken} /> </Route>
                        <Route exact path="/playlist/:playlistId"><Songs accessToken={userLogged ? userLogged.accessToken : accessToken} /></Route>
                        <Route path="*"><YourLibrary accessToken={userLogged ? userLogged.accessToken : accessToken} /></Route>
                    </Switch>
                </div>
            </Router>
        :   <Login />
    )
}

export default connect(mapStateToProps)(App);
