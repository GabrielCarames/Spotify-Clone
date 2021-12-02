import { useEffect, useState } from 'react'
import axios from 'axios'

export function useAuthenticationHelper (code) {
    // const [refreshToken, setRefreshToken] = useState()
    // const [accessToken, setAccessToken] = useState()
    // const [expiresIn, setExpiresIn] = useState()
    const userLogged = JSON.parse(localStorage.getItem('userLogged'))

    useEffect(() => {
        if (code) {
            axios.post("http://localhost:3001/login", {code}).then(res => {
              console.log("datos", res)
              const userLogginData = {"accessToken": res.data.accessToken, "refreshToken": res.data.refreshToken, "expiresIn": res.data.expiresIn}
            //   setAccessToken(userLogginData.accessToken)
            //   setRefreshToken(userLogginData.refreshToken)
            //   setExpiresIn(userLogginData.expiresIn)
              localStorage.setItem('userLogged', JSON.stringify(userLogginData))
              window.history.pushState({}, null, "/")
            }).catch((err) => {
              console.log(err)
              window.location = "/"
            })
        } else return
    }, [code])

    useEffect(() => {
        console.log("soyelmalo", userLogged)
        if (!userLogged) return
        const interval = setInterval(() => {
            console.log("hoalsd'asd'¿", userLogged)
            const refreshToken = userLogged.refreshToken
            axios.post("http://localhost:3001/refresh", {refreshToken}).then(res => {
                console.log("me refresque el token", res.data)
                const userLogged = JSON.parse(localStorage.getItem('userLogged'))
                const userLogginData = {"accessToken": res.data.accessToken, "refreshToken": userLogged.refreshToken, "expiresIn": res.data.expiresIn}
                localStorage.setItem('userLogged', JSON.stringify(userLogginData))
                console.log("hoal2", JSON.parse(localStorage.getItem('userLogged')))
                // setAccessToken(userLogginData.accessToken)
                // setExpiresIn(expiresIn)
            }).catch(() => {window.location = "/"})
        }, (userLogged.expiresIn - 60) * 1000)
        return () => clearInterval(interval)
    }, [userLogged && userLogged.refreshToken, userLogged && userLogged.expiresIn])
    // }, [refreshToken, expiresIn])

    return {  }
}

export default useAuthenticationHelper