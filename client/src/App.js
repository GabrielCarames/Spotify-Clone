import { useState } from "react";
import Search from "./components/Search";
import Login from "./components/Login";
import Player from "./components/Player";
import useAuthenticationHelper from "./hooks/useAuthenticationHelper";

function App() {
    const [playingTrack, setPlayingTrack] = useState()

  const code = new URLSearchParams(window.location.search).get("code")
  console.log("codigo", code)
  const { accessToken } = useAuthenticationHelper(code)
  console.log("accescode", accessToken)

  return code ? 
  <div className="app-container">
      <div className="sidebar-container sidebar">
          <nav className="sidebar__navbar">
              <ul className="sidebar__list">
                  <li className="sidebar__item">
                      Search
                  </li>
              </ul>
          </nav>
      </div>
      <div className="player-container">
      {accessToken && <Player accessToken={accessToken} trackUri={playingTrack?.uri} />}
      </div>
      {/* <Search code={code} /> */}
  </div> : <Login />

}

export default App;
