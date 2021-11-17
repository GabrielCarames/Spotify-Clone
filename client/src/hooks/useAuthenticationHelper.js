import { useEffect, useState } from 'react'
import axios from 'axios'

export function useAuthenticationHelper (code) {
    const [refreshToken, setRefreshToken] = useState()
    const [accessToken, setAccessToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        if (code) {
            console.log("cosadedasdasdad", code)
            axios.post("http://localhost:3001/login", {code}).then(res => {
              console.log("datos", res)
              const userLogginData = {"accessToken": res.data.accessToken, "refreshToken": res.data.refreshToken, "expiresIn": res.data.expiresIn}
              setAccessToken(userLogginData.accessToken)
              setRefreshToken(userLogginData.refreshToken)
              setExpiresIn(userLogginData.expiresIn)
              localStorage.setItem('userLogged', JSON.stringify(userLogginData))
              window.history.pushState({}, null, "/")
            }).catch((err) => {
              console.log(err)
              window.location = "/"
            })
        } else return
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post("http://localhost:3001/refresh", {refreshToken}).then(res => {
              setAccessToken(res.data.accessToken)
              setExpiresIn(res.data.expiresIn)
            }).catch(() => {window.location = "/"})
        }, (expiresIn - 60) * 1000)
        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return { accessToken }
}

export default useAuthenticationHelper