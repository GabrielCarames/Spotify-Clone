require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const SpotifyWebApi = require("spotify-web-api-node")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    }).catch(err => {
      console.log("err", err)
      res.sendStatus(400)
  })
})

app.listen(3001)